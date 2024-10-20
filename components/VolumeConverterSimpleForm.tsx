'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ConversionMetrics } from '@/config/metrics'
import { convertValue, getMetricFromSlug } from '@/lib/metrics'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Meteors } from '@/components/ui/Meteors'

interface VolumeConverterSimpleFormProps {
  className?: string
  fromMetric: string
  toMetric: string
}

const volumeConverterFormSchema = z.object({
  amount: z.string(),
  from: z.string(),
  to: z.string(),
})

type volumeConverterFormValues = z.infer<typeof volumeConverterFormSchema>

export function VolumeConverterSimpleForm({
  className,
  fromMetric,
  toMetric,
}: VolumeConverterSimpleFormProps) {
  const [result, setResult] = useState<string | null>('')
  const [showUpdatedResult, setShowUpdatedResult] = useState<boolean>(false)

  const defaultValues: Partial<volumeConverterFormValues> = {
    amount: '1',
    from: fromMetric,
    to: toMetric,
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof volumeConverterFormSchema>>({
    resolver: zodResolver(volumeConverterFormSchema.required()),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  useEffect(() => {
    const initialConvertedValue = convertValue(1, fromMetric, toMetric)
    setResult(initialConvertedValue)
  }, [fromMetric, toMetric])

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof volumeConverterFormSchema>) {
    const { amount, from, to } = values
    const convertedValue = convertValue(parseFloat(amount), from, to)
    setResult(convertedValue)
    setShowUpdatedResult(true)
  }

  const watchTo = form.watch('to', toMetric)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'space-y-8 overflow-hidden rounded-lg shadow-lg',
          className
        )}
      >
        <div className={cn('flex flex-col bg-gray-50 md:flex-row')}>
          <div className="w-full space-y-8 p-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Amount in{' '}
                      {getMetricFromSlug(fromMetric, ConversionMetrics)?.name}
                    </FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input placeholder="1" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" size="full">
              Convert to {getMetricFromSlug(watchTo, ConversionMetrics)?.name}
            </Button>

            {(!isDirty || !showUpdatedResult) && (
              <Card className="overflow-hidden bg-gray-200/70">
                <CardHeader>
                  <CardTitle>
                    Result in{' '}
                    {getMetricFromSlug(watchTo, ConversionMetrics)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-p:mt-0">
                  {result && <p>{result}</p>}
                  <Meteors number={20} />
                </CardContent>
              </Card>
            )}

            {isDirty && showUpdatedResult && (
              <Card className="overflow-hidden bg-gray-200/70">
                <CardHeader>
                  <CardTitle>
                    Result in{' '}
                    {getMetricFromSlug(watchTo, ConversionMetrics)?.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-p:mt-0">
                  {result && <p>{result}</p>}
                  <Meteors number={20} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </form>
    </Form>
  )
}
