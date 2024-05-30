'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, Variants } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
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
import { Slider } from '@/components/ui/Slider'

import { Female, Male } from './icons'
import { RadioGroup, RadioGroupItem } from './ui/RadioGroup'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/Select'

const waterIntakeFormSchema = z.object({
  gender: z.string(),
  age: z.number(),
  weight: z.number(),
  height: z.number(),
  activity: z.string(),
})

type waterIntakeFormValues = z.infer<typeof waterIntakeFormSchema>

const defaultValues: Partial<waterIntakeFormValues> = {
  gender: 'male',
  age: 25,
  weight: 45,
  height: 140,
  activity: 'occasional',
}

export function WaterIntakeCalculator() {
  const [showResult, setShowResult] = useState<Boolean>(false)
  const [result, setResult] = useState<number>(0)
  const [isContainerVisible, setIsContainerVisible] = useState<Boolean>(true)

  // 1. Define your form.
  const form = useForm<z.infer<typeof waterIntakeFormSchema>>({
    resolver: zodResolver(waterIntakeFormSchema.required()),
    defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof waterIntakeFormSchema>) {
    setShowResult(true)
    setResult(calculateWaterIntake(values))
  }

  const curtains = new Array(12).fill(true)

  const container: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        when: 'afterChildren',
      },
    },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delayChildren: 0.5,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  function handleAnimationComplete() {
    setIsContainerVisible(false)
  }

  function calculateWaterIntake({
    gender,
    weight,
    height,
    age,
    activity,
  }: z.infer<typeof waterIntakeFormSchema>) {
    if (!gender || !weight || !height || !age || !activity) {
      return 0
    }

    let bmr
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      // female
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    let totalNeeds
    switch (activity) {
      case 'rare':
        totalNeeds = bmr * 1.2
        break
      case 'occasional':
        totalNeeds = bmr * 1.55
        break
      case 'weekly':
        totalNeeds = bmr * 1.725
        break
      case 'daily':
        totalNeeds = bmr * 1.9
        break
      default:
        totalNeeds = bmr // If somehow no activity level is selected
    }

    return totalNeeds
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'mx-auto space-y-8 overflow-hidden rounded-lg shadow-lg',
          showResult && 'max-w-none',
          !showResult && 'max-w-2xl'
        )}
      >
        <div className={cn('flex flex-col bg-gray-50 md:flex-row')}>
          <div className="w-full space-y-8 p-6">
            <div className="grid grid-cols-2 gap-6">
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
                      className="grid max-w-md grid-cols-2 gap-0 pt-2"
                    >
                      <FormItem>
                        <FormLabel className="[&:has([data-state=checked])>div>svg]:fill-primary [&:has([data-state=checked])>div>svg]:stroke-foreground [&:has([data-state=checked])>div]:border-blue-600/70 [&:has([data-state=checked])>div]:bg-primary/20">
                          <FormControl>
                            <RadioGroupItem value="male" className="sr-only" />
                          </FormControl>
                          <div className="cursor-pointer items-center rounded-md rounded-r-none border-1 border-gray-800/40 bg-gray-50/20 p-4 transition hover:border-blue-600/55 hover:bg-gray-50/55">
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
                            <RadioGroupItem
                              value="female"
                              className="sr-only"
                            />
                          </FormControl>
                          <div className="cursor-pointer items-center rounded-md rounded-l-none border-1 border-gray-800/40 bg-gray-50/20 p-4 transition hover:border-blue-600/55 hover:bg-gray-50/55">
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
                        <span className="inline text-base font-medium uppercase text-gray-500">
                          years
                        </span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        onValueChange={(values) => field.onChange(values[0])}
                        defaultValue={[field.value]}
                        max={100}
                        min={18}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
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
                        <span className="inline text-base font-medium uppercase text-gray-500">
                          kg
                        </span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        onValueChange={(values) => field.onChange(values[0])}
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
                        <span className="inline text-base font-medium uppercase text-gray-500">
                          cm
                        </span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        onValueChange={(values) => field.onChange(values[0])}
                        defaultValue={[field.value]}
                        max={210}
                        min={140}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Physical Activity</FormLabel>
                  <FormDescription>
                    Select your daily physical activity level.
                  </FormDescription>
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
                      <SelectItem value="rare">Rare</SelectItem>
                      <SelectItem value="occasional">Occassional</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="full">
              Submit
            </Button>
          </div>
          <motion.div
            className={cn(
              'relative',
              showResult && 'grid place-content-center bg-background/25',
              !showResult && 'hidden'
            )}
          >
            <div className="prose p-8">
              <h2 className="mt-0 text-center capitalize">
                How many glasses of water should you drink in a day?
              </h2>
              <p>You daily recommended water intake:</p>
              <ul>
                <li>
                  <strong className="">{(result / 250).toFixed(2)}</strong>{' '}
                  glasses of water (8oz. glass)
                </li>
                <li>
                  <strong className="">~{(result / 1000).toFixed(2)} L</strong>{' '}
                  / day
                </li>
              </ul>
            </div>
            <motion.div
              variants={container}
              initial={false}
              animate={showResult ? 'hidden' : 'show'}
              className={cn(
                'absolute inset-0 flex bg-transparent',
                !isContainerVisible && 'hidden'
              )}
            >
              {curtains.map((curtain, index) => (
                <motion.div
                  variants={item}
                  className="h-full w-1/12 bg-white"
                  key={`curtain-${index}`}
                  onAnimationComplete={
                    index === curtains.length - 1
                      ? handleAnimationComplete
                      : undefined
                  }
                ></motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </form>
    </Form>
  )
}
