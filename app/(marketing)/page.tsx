import type { Metadata } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Panel } from '@/components/ui/Panel'
import { Container } from '@/components/Container'
import { FunFact } from '@/components/FunFact'
import { PageHeader } from '@/components/PageHeader'
import { Prose } from '@/components/Prose'
import WebsiteJsonLd from '@/components/StructuredData/WebsiteJsonLd'
import { TableWaterIntake } from '@/components/TableWaterIntake'
import { WaterIntakeCalculator } from '@/components/WaterIntakeCalculator'
import { Wrapper } from '@/components/Wrapper'

// export const revalidate = 60 // revalidate at most every minute
// export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: siteConfig.title,
}

const waterFactor = [
  {
    name: 'Body weight',
    description:
      'The larger the body weight, the more water you need to drink to stay hydrated.',
  },
  {
    name: 'Physical activity',
    description:
      "Engaging in physical activity, especially intense exercise, increases the body's water requirements.",
  },
  {
    name: 'Climate',
    description:
      'Hot and humid climates can cause increased sweating and fluid loss, requiring higher water intake.',
  },
  {
    name: 'Health conditions',
    description:
      'Certain health conditions, such as kidney stones or urinary tract infections, may require increased water intake.',
  },
  {
    name: 'Pregnancy and breastfeeding',
    description:
      'Pregnant and breastfeeding women need additional water to support the growth and development of the baby.',
  },
  {
    name: '',
    description:
      'It is important to note that individual water needs may vary, and it is best to consult with a healthcare professional or use a water intake calculator to determine your specific daily water intake.',
  },
]

const dehydrationFactor = [
  {
    name: 'Thirst',
    description:
      "Feeling thirsty is the body's way of signaling that it needs more water.",
  },
  {
    name: 'Dry mouth and lips',
    description: 'Dryness of the mouth and lips can be a sign of dehydration.',
  },
  {
    name: 'Dark-colored urine',
    description:
      'Urine that is dark yellow or amber in color indicates dehydration.',
  },
  {
    name: 'Fatigue and dizziness',
    description:
      'Dehydration can cause fatigue, dizziness, and lightheadedness.',
  },
  {
    name: 'Headaches',
    description: 'Lack of water can trigger headaches and migraines.',
  },
  {
    name: 'Dry skin',
    description: 'Dehydration can result in dry and flaky skin.',
  },
]

const intoxicationSymptoms = [
  {
    name: 'Headaches',
  },
  {
    name: 'Nausea and vomiting',
  },
  {
    name: 'Confusion and disorientation',
  },
  {
    name: 'Seizures',
  },
  {
    name: 'Muscle weakness and cramps',
  },
  {
    name: 'Fatigue and tiredness',
  },
]

export default async function Home() {
  return (
    <>
      <WebsiteJsonLd
        company={siteConfig.siteName}
        url={process.env.NEXT_PUBLIC_BASE_URL!}
      />
      <div className="container px-4 md:px-8">
        <div className="my-20">
          <PageHeader
            title="How Much Water Should You Drink Daily?"
            intro="Calculate Your Optimal Daily Hydration Needs in Seconds"
            className="mx-auto text-center"
          />
          <div className="mx-auto mt-6 w-full max-w-4xl">
            <WaterIntakeCalculator />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Wrapper>
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="col-span-1 flex items-center">
                <Prose>
                  <h2 className="mt-0">
                    Are you drinking enough water to stay hydrated?
                  </h2>

                  <p>
                    Water is essential for maintaining the balance of bodily
                    fluids. It helps to regulate body temperature, lubricate
                    joints, and protect sensitive tissues. Water also plays a
                    key role in digestion and nutrient absorption, as well as
                    the elimination of waste products through urine and sweat.
                  </p>
                  <p className="mb-0">
                    Proper hydration is crucial for optimal brain function and
                    concentration. Even mild dehydration can impair cognitive
                    performance, leading to decreased focus, fatigue, and
                    headaches. Water is also important for maintaining healthy
                    skin, as it helps to moisturize and nourish the skin cells.
                  </p>
                </Prose>
              </div>
              <div className="relative col-span-1 grid place-items-center py-24">
                <div className="pointer-events-none absolute right-0 top-0 h-full overflow-hidden">
                  <svg
                    width="723"
                    height="550"
                    viewBox="0 0 723 550"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full"
                  >
                    <path
                      d="M618.706 8.19014C396.197 136.139 191.613 68.2567 103.017 9.80629C96.0953 5.23983 86.5582 8.44285 84.1734 16.3848L29.2025 199.448C27.4003 205.45 30.5049 211.805 36.3827 213.978C110.355 241.319 251.735 289.278 368.848 289.278C485.579 289.278 618.718 241.631 679.013 214.245C684.216 211.882 686.833 206.117 685.378 200.591L636.601 15.4495C634.571 7.745 625.612 4.21848 618.706 8.19014Z"
                      fill="#CBF7FF"
                    />
                    <path
                      d="M544.631 51.3144C393.546 258.809 179.054 280.158 74.3314 262.87C66.1499 261.519 58.7448 268.33 59.8022 276.554L84.1753 466.133C84.9744 472.348 90.3986 476.887 96.6516 476.477C175.346 471.312 324 457.516 430.954 409.807C537.56 362.253 639.74 264.501 683.649 214.928C687.438 210.651 687.48 204.319 683.9 199.866L563.931 50.6539C558.939 44.4445 549.321 44.8735 544.631 51.3144Z"
                      fill="#CBF7FF"
                    />
                  </svg>
                </div>
                <div className="w-4/5 lg:w-3/5">
                  <FunFact title="Humans are made mostly of water">
                    <p>
                      An adult human body is about <strong>60% water</strong>,
                      with the brain and heart being composed of around{' '}
                      <strong>73% water</strong>.
                    </p>
                  </FunFact>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-gray-950 px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Container className="flex flex-col gap-y-8 text-center md:max-w-6xl md:gap-y-16">
              <Prose theme="dark">
                <Balancer as="h2" className="mt-0">
                  What factors influence how much water you should drink?
                </Balancer>
                <p>
                  Several factors can influence how much water you should drink
                  in a day. These include:
                </p>
              </Prose>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                {waterFactor.map((item, index) => (
                  <Prose
                    className={cn(
                      'md: rounded-lg bg-gray-50 p-6 text-start',
                      !item.name && 'text-center'
                    )}
                    key={`factor-${index}`}
                  >
                    {item.name && (
                      <h3 className="mt-0 text-xl font-semibold">
                        {item.name}
                      </h3>
                    )}
                    <p>{item.description}</p>
                  </Prose>
                ))}
              </div>
            </Container>
          </Container>
        </Wrapper>
        <Wrapper>
          <Container className="flex flex-col gap-y-8 md:gap-y-16">
            <Prose className="mx-auto text-center md:max-w-xl">
              <Balancer as="h2">
                How much water should you drink in a day?
              </Balancer>
            </Prose>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex items-center">
                <Panel>
                  <Prose>
                    <p>
                      The recommended daily water intake varies depending on
                      various factors, including age, gender, activity level,
                      and overall health. The National Academies of Sciences,
                      Engineering, and Medicine provides general guidelines for
                      daily water intake:
                    </p>
                    <p>
                      These recommendations include fluids from all sources,
                      including water, beverages, and food. It is important to
                      note that these are general guidelines, and individual
                      water needs may vary. It is always best to listen to your
                      body and drink water when you feel thirsty.
                    </p>
                  </Prose>
                </Panel>
              </div>
              <div className="mx-auto w-full md:max-w-3xl">
                <Panel className="p-0 md:p-0">
                  <TableWaterIntake />
                </Panel>
              </div>
            </div>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-gray-100 px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Container className="flex flex-col gap-y-8 text-center md:max-w-6xl md:gap-y-16">
              <Prose>
                <Balancer as="h2" className="mt-0">
                  What are the signs of dehydration?
                </Balancer>
                <p>
                  <Link href="/dehydration">Dehydration</Link> occurs when the
                  body loses more water than it takes in. It can lead to various
                  symptoms and health problems. Some common signs of dehydration
                  include:
                </p>
              </Prose>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                {dehydrationFactor.map((item, index) => (
                  <Prose
                    className={cn(
                      'md: rounded-lg bg-gray-50 p-6 text-start shadow-sm',
                      !item.name && 'text-center'
                    )}
                    key={`factor-${index}`}
                  >
                    {item.name && (
                      <h3 className="mt-0 text-xl font-semibold">
                        {item.name}
                      </h3>
                    )}
                    <p>{item.description}</p>
                  </Prose>
                ))}
              </div>
              <Prose className="mx-auto max-w-4xl">
                <p>
                  If you experience any of these symptoms, it is important to
                  drink water and rehydrate your body. Severe dehydration can be
                  life-threatening and may require medical attention.
                </p>
              </Prose>
            </Container>
          </Container>
        </Wrapper>
        <Wrapper>
          <Container>
            <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 md:gap-16 md:px-0">
              <FunFact
                title="Water consumption helps maintain a healthy weight"
                align="left"
                icon="bottle"
              >
                <p>
                  Drinking water can help you feel full and make your body's
                  energy-burning process work better, which helps in{' '}
                  <a href="https://www.clinicgeek.com/blog/how-do-you-lose-weight-without-exercise#2-drink-more-water?ref=wateraday.com">
                    keeping a healthy weight.
                  </a>
                </p>
              </FunFact>
              <FunFact title="You can survive weeks without food, but only days without water">
                <p>
                  Water is crucial for maintaining bodily functions, including
                  regulation of temperature, removal of waste, and digestion.
                </p>
              </FunFact>
            </div>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-[#030122] px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Container className="flex flex-col gap-y-8 text-center md:max-w-6xl md:gap-y-16">
              <Prose theme="dark" className="mx-auto md:max-w-4xl">
                <Balancer as="h2" className="mt-0">
                  How can you stay hydrated throughout the day?
                </Balancer>
                <p>
                  Here are some practical tips to help you stay hydrated
                  throughout the day:
                </p>
              </Prose>
              <div>
                <ol className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">
                      Carry a water bottle
                    </strong>
                    : Keep a reusable water bottle with you at all times to
                    remind yourself to drink water regularly.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">Set reminders</strong>: Use
                    a hydration app or set reminders on your phone to drink
                    water at regular intervals.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">Infuse your water</strong>:
                    Add slices of fruits or herbs to your water to enhance the
                    flavor and make it more enjoyable to drink.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">
                      Eat water-rich foods
                    </strong>
                    : Include fruits and vegetables with high water content,
                    such as watermelon, cucumbers, and oranges, in your diet.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">
                      Limit caffeine and alcohol
                    </strong>
                    : Both caffeine and alcohol can have a diuretic effect,
                    increasing fluid loss. Limit your intake of these beverages
                    and drink water alongside them.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">
                      Drink water before, during, and after exercise
                    </strong>
                    : Hydrate before, during, and after physical activity to
                    replenish the fluids lost through sweat.
                  </li>
                  <li className="text-start text-gray-400">
                    <strong className="text-gray-50">
                      Monitor urine color
                    </strong>
                    : Check the color of your urine. If it is pale yellow or
                    clear, it indicates that you are well-hydrated.
                  </li>
                </ol>
              </div>
            </Container>
          </Container>
        </Wrapper>
        <Wrapper>
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="col-span-1 flex items-center md:order-2">
                <Prose>
                  <h2 className="mt-0">
                    Beware The Dangers of Drinking Too Much Water
                  </h2>

                  <p>
                    While it is important to stay hydrated, overhydration can
                    have serious consequences. When we drink excessive amounts
                    of water, our body's electrolyte balance can be disrupted,
                    leading to a condition known as water intoxication or
                    hyponatremia.
                  </p>
                  <p className="mb-0">
                    This condition occurs when the sodium levels in our blood
                    become diluted, causing cells to swell.
                  </p>
                </Prose>
              </div>
              <div className="relative col-span-1 grid place-items-center py-24 md:order-1">
                <div className="pointer-events-none absolute right-0 top-0 h-full overflow-hidden">
                  <svg
                    width="723"
                    height="550"
                    viewBox="0 0 723 550"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full"
                  >
                    <path
                      d="M618.706 8.19014C396.197 136.139 191.613 68.2567 103.017 9.80629C96.0953 5.23983 86.5582 8.44285 84.1734 16.3848L29.2025 199.448C27.4003 205.45 30.5049 211.805 36.3827 213.978C110.355 241.319 251.735 289.278 368.848 289.278C485.579 289.278 618.718 241.631 679.013 214.245C684.216 211.882 686.833 206.117 685.378 200.591L636.601 15.4495C634.571 7.745 625.612 4.21848 618.706 8.19014Z"
                      fill="#CBF7FF"
                    />
                    <path
                      d="M544.631 51.3144C393.546 258.809 179.054 280.158 74.3314 262.87C66.1499 261.519 58.7448 268.33 59.8022 276.554L84.1753 466.133C84.9744 472.348 90.3986 476.887 96.6516 476.477C175.346 471.312 324 457.516 430.954 409.807C537.56 362.253 639.74 264.501 683.649 214.928C687.438 210.651 687.48 204.319 683.9 199.866L563.931 50.6539C558.939 44.4445 549.321 44.8735 544.631 51.3144Z"
                      fill="#CBF7FF"
                    />
                  </svg>
                </div>
                <div className="w-4/5 lg:w-3/5">
                  <FunFact title="Humans are made mostly of water">
                    <p>
                      An adult human body is about <strong>60% water</strong>,
                      with the brain and heart being composed of around{' '}
                      <strong>73% water</strong>.
                    </p>
                  </FunFact>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-gray-100 px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Container className="flex flex-col gap-y-4 text-center md:max-w-6xl md:gap-y-16">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
                <Panel className="bg-gray-50 text-start">
                  <Prose>
                    <div className="mb-4 mt-0 bg-gray-100 p-4">
                      <Balancer as="h2" className="m-0 text-2xl text-blue-900">
                        What is Water Intoxication?
                      </Balancer>
                    </div>

                    <p>
                      Water intoxication can occur due to various factors,
                      including excessive water intake, certain medical
                      conditions, and prolonged physical activity without proper
                      hydration. The symptoms of water intoxication can vary and
                      may include:
                    </p>

                    <div className="mb-0 mt-4 flex flex-wrap gap-4">
                      {intoxicationSymptoms.map((symptom, index) => (
                        <div
                          key={`symptom-${index}`}
                          className="rounded-full border border-solid border-gray-200 px-2.5 py-1.5 text-sm text-gray-900"
                        >
                          {symptom.name}
                        </div>
                      ))}
                    </div>
                  </Prose>
                </Panel>
                <Panel className="bg-gray-50 text-start">
                  <Prose>
                    <div className="mb-4 mt-0 bg-gray-100 p-4">
                      <Balancer as="h2" className="m-0 text-2xl text-blue-900">
                        What is Hyponatremia?
                      </Balancer>
                    </div>
                    <p>
                      One of the most significant dangers of drinking too much
                      water is the development of hyponatremia. Hyponatremia is
                      a condition characterized by low sodium levels in the
                      blood. Sodium is an essential electrolyte that helps
                      regulate fluid balance in the body.
                    </p>
                    <p>
                      When sodium levels become too diluted, it can lead to
                      swelling of the cells and potentially life-threatening
                      complications.
                    </p>
                  </Prose>
                </Panel>
              </div>
            </Container>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-[#030122] px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Container className="flex flex-col gap-y-8 text-start md:max-w-6xl md:gap-y-8">
              <Prose theme="dark" className="md:max-w-4xl">
                <Balancer as="h2" className="mt-0">
                  How to Prevent Water Intoxication?
                </Balancer>
                <p>
                  To prevent water intoxication and maintain proper hydration,
                  it is essential to follow these guidelines:
                </p>
              </Prose>

              <ol className="flex flex-col gap-4">
                <li className="rounded-md border border-solid border-gray-500 bg-gray-50/15 p-4 text-start text-gray-50">
                  <strong className="font-semibold">
                    Drink water in moderation
                  </strong>
                  : While it is important to stay hydrated, avoid excessive
                  water intake. Listen to your body's thirst cues and drink
                  water when you feel thirsty.
                </li>

                <li className="rounded-md border border-solid border-gray-500 bg-gray-50/15 p-4 text-start text-gray-50">
                  <strong className="font-semibold">
                    Monitor your urine color
                  </strong>
                  : Pay attention to the color of your urine. Clear or pale
                  urine may indicate overhydration, while a light yellow color
                  is a sign of proper hydration.
                </li>

                <li className="rounded-md border border-solid border-gray-500 bg-gray-50/15 p-4 text-start text-gray-50">
                  <strong className="font-semibold">
                    Balance water intake with electrolytes
                  </strong>
                  : If you engage in prolonged physical activity or sweat
                  excessively, consider replenishing electrolytes with sports
                  drinks or electrolyte-rich foods.
                </li>

                <li className="rounded-md border border-solid border-gray-500 bg-gray-50/15 p-4 text-start text-gray-50">
                  <strong className="font-semibold">
                    Consult a healthcare professional
                  </strong>
                  : If you have any concerns about your water intake or
                  experience symptoms of overhydration, seek medical advice.
                </li>
              </ol>
            </Container>
          </Container>
        </Wrapper>
      </div>
    </>
  )
}
