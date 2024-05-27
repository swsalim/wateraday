'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ConversionMetrics } from '@/config/metrics'
import { convertValue, getMetricNameFromSlug } from '@/lib/metrics'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select'

const volumeConverterFormSchema = z.object({
  amount: z.string(),
  from: z.string(),
  to: z.string(),
})

type volumeConverterFormValues = z.infer<typeof volumeConverterFormSchema>

const defaultValues: Partial<volumeConverterFormValues> = {
  amount: '1',
  from: 'liter',
  to: 'us-fluid-ounce',
}

export function VolumeConverterForm({ className }: { className?: string }) {
  const [result, setResult] = useState<string | null>('')
  const [showUpdatedResult, setShowUpdatedResult] = useState<boolean>(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof volumeConverterFormSchema>>({
    resolver: zodResolver(volumeConverterFormSchema.required()),
    defaultValues,
  })

  const {
    formState: { isDirty },
  } = form

  useEffect(() => {
    const initialConvertedValue = convertValue(1, 'liter', 'us-fluid-ounce')
    setResult(initialConvertedValue)
  }, [])

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof volumeConverterFormSchema>) {
    console.log('onSubmit')
    console.log(values)
    const { amount, from, to } = values
    const convertedValue = convertValue(parseFloat(amount), from, to)
    console.log(`convertedValue: ${convertedValue}`)
    setResult(convertedValue)
    setShowUpdatedResult(true)
  }

  const watchTo = form.watch('to', 'us-fluid-ounce')

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
                    <FormLabel>Amount</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input placeholder="1" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Convert from{' '}
                    {getMetricNameFromSlug(field.value, ConversionMetrics)}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select a verified email to display"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ConversionMetrics.map((metric) => (
                        <SelectItem key={metric.slug} value={metric.slug}>
                          {metric.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Convert to{' '}
                    {getMetricNameFromSlug(field.value, ConversionMetrics)}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Select a verified email to display"
                          className="text-gray-500"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ConversionMetrics.map((metric) => (
                        <SelectItem key={metric.slug} value={metric.slug}>
                          {metric.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="full">
              Convert
            </Button>

            {(!isDirty || !showUpdatedResult) && (
              <Card className="overflow-hidden bg-gray-200/70">
                <CardHeader>
                  <CardTitle>Result in US fluid ounce</CardTitle>
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
                    {getMetricNameFromSlug(watchTo, ConversionMetrics)}
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
