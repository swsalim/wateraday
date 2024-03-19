'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup'

import { Female, Male } from './icons'
import { RadioGroup, RadioGroupItem } from './ui/RadioGroup'
import { Slider } from './ui/Slider'

const waterIntakeFormSchema = z.object({
  gender: z.string(),
  age: z.number(),
  weight: z.number(),
  height: z.number(),
})

type waterIntakeFormValues = z.infer<typeof waterIntakeFormSchema>

const defaultValues: Partial<waterIntakeFormValues> = {
  gender: 'male',
  age: 25,
  weight: 45,
  height: 140,
}

export function WaterIntakeCalculator() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof waterIntakeFormSchema>>({
    resolver: zodResolver(waterIntakeFormSchema.required()),
    defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof waterIntakeFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 overflow-hidden rounded-lg shadow-lg"
      >
        <div className="grid bg-white md:grid-cols-2">
          <div className="space-y-8 p-6">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormMessage />
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid max-w-md grid-cols-2 gap-8 pt-2"
                  >
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div>svg]:fill-primary [&:has([data-state=checked])>div>svg]:stroke-foreground [&:has([data-state=checked])>div]:border-blue-600/70 [&:has([data-state=checked])>div]:bg-primary/20">
                        <FormControl>
                          <RadioGroupItem value="male" className="sr-only" />
                        </FormControl>
                        <div className="border-1 cursor-pointer items-center rounded-md border-stone-800/40 bg-stone-50/20 p-4 transition hover:border-blue-600/55 hover:bg-stone-50/55">
                          <Male className="mx-auto size-10 fill-background stroke-foreground/50 transition" />
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Male
                        </span>
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormLabel className="[&:has([data-state=checked])>div>svg]:fill-primary [&:has([data-state=checked])>div>svg]:stroke-foreground [&:has([data-state=checked])>div]:border-blue-600/70 [&:has([data-state=checked])>div]:bg-primary/20">
                        <FormControl>
                          <RadioGroupItem value="female" className="sr-only" />
                        </FormControl>
                        <div className="border-1 cursor-pointer items-center rounded-md border-stone-800/40 bg-stone-50/20 p-4 transition hover:border-blue-600/55 hover:bg-stone-50/55">
                          <Female className="mx-auto size-10 fill-background stroke-foreground/50 transition" />
                        </div>
                        <span className="block w-full p-2 text-center font-normal">
                          Female
                        </span>
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormMessage />
                  <FormLabel>
                    <div className="w-full p-2 text-center">
                      <span className="mr-2 inline font-heading text-5xl">
                        {field.value}
                      </span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Slider
                      onValueChange={field.onChange}
                      defaultValue={[field.value]}
                      max={100}
                      min={18}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormDescription>Enter your weight in KG</FormDescription>
                  <FormMessage />
                  <FormLabel>
                    <div className="w-full p-2 text-center">
                      <span className="mr-2 inline font-heading text-5xl">
                        {field.value}
                      </span>
                      <span className="inline text-base font-medium uppercase text-stone-500">
                        kg
                      </span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Slider
                      onValueChange={field.onChange}
                      defaultValue={[field.value]}
                      max={200}
                      min={30}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height</FormLabel>
                  <FormDescription>Enter your height in CM</FormDescription>
                  <FormMessage />
                  <FormLabel>
                    <div className="w-full p-2 text-center">
                      <span className="mr-2 inline font-heading text-5xl">
                        {field.value}
                      </span>
                      <span className="inline text-base font-medium uppercase text-stone-500">
                        cm
                      </span>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Slider
                      onValueChange={field.onChange}
                      defaultValue={[field.value]}
                      max={210}
                      min={140}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
          <div className="p-6"></div>
        </div>
      </form>
    </Form>
  )
}
