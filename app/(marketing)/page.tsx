import type { Metadata } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

import { siteConfig } from '@/config/site'
import { FunFact } from '@/components/FunFact'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { TableWaterIntake } from '@/components/TableWaterIntake'
import { WaterIntakeCalculator } from '@/components/WaterIntakeCalculator'

// export const revalidate = 60 // revalidate at most every minute
// export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: siteConfig.title,
}

export default async function Home() {
  return (
    <>
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
      <Section theme="dark">
        <h2>Are you drinking enough water to stay hydrated?</h2>

        <FunFact title="Humans are made mostly of water">
          An adult human body is about <strong>60% water</strong>, with the
          brain and heart being composed of around <strong>73% water</strong>.
        </FunFact>

        <p>
          Water is essential for maintaining the balance of bodily fluids. It
          helps to regulate body temperature, lubricate joints, and protect
          sensitive tissues. Water also plays a key role in digestion and
          nutrient absorption, as well as the elimination of waste products
          through urine and sweat.
        </p>
        <p className="mb-0">
          Proper hydration is crucial for optimal brain function and
          concentration. Even mild dehydration can impair cognitive performance,
          leading to decreased focus, fatigue, and headaches. Water is also
          important for maintaining healthy skin, as it helps to moisturize and
          nourish the skin cells.
        </p>
      </Section>
      <Section>
        <Balancer as="h2">
          What factors influence how much water you should drink?
        </Balancer>

        <p>
          Several factors can influence how much water you should drink in a
          day. These include:
        </p>
        <ul>
          <li>
            <strong>Body weight</strong>: The larger the body weight, the more
            water you need to drink to stay hydrated.
          </li>

          <li>
            <strong>Physical activity</strong>: Engaging in physical activity,
            especially intense exercise, increases the body's water
            requirements.
          </li>

          <li>
            <strong>Climate</strong>: Hot and humid climates can cause increased
            sweating and fluid loss, requiring higher water intake.
          </li>

          <li>
            <strong>Health conditions</strong>: Certain health conditions, such
            as kidney stones or urinary tract infections, may require increased
            water intake.
          </li>

          <li>
            <strong>Pregnancy and breastfeeding</strong>: Pregnant and
            breastfeeding women need additional water to support the growth and
            development of the baby.
          </li>
        </ul>

        <p>
          It is important to note that individual water needs may vary, and it
          is best to consult with a healthcare professional or use a water
          intake calculator to determine your specific daily water intake.
        </p>
      </Section>
      <Section theme="dark">
        <Balancer as="h2">How much water should you drink in a day?</Balancer>
        <FunFact
          title="Water consumption helps maintain a healthy weight"
          align="left"
          icon="bottle"
        >
          Drinking water can help you feel full and make your body's
          energy-burning process work better, which helps in{' '}
          <a href="https://www.clinicgeek.com/blog/how-do-you-lose-weight-without-exercise#2-drink-more-water?ref=wateraday.com">
            keeping a healthy weight.
          </a>
        </FunFact>
        <p>
          The recommended daily water intake varies depending on various
          factors, including age, gender, activity level, and overall health.
          The National Academies of Sciences, Engineering, and Medicine provides
          general guidelines for daily water intake:
        </p>
        <div className="mx-auto w-full md:max-w-3xl">
          <TableWaterIntake />
        </div>
        <p>
          These recommendations include fluids from all sources, including
          water, beverages, and food. It is important to note that these are
          general guidelines, and individual water needs may vary. It is always
          best to listen to your body and drink water when you feel thirsty.
        </p>
      </Section>
      <Section>
        <Balancer as="h2">What are the signs of dehydration? </Balancer>
        <p>
          <Link href="/dehydration">Dehydration</Link> occurs when the body
          loses more water than it takes in. It can lead to various symptoms and
          health problems. Some common signs of dehydration include:
        </p>
        <ul>
          <li>
            <strong>Thirst:</strong> Feeling thirsty is the body's way of
            signaling that it needs more water.
          </li>
          <li>
            <strong>Dry mouth and lips</strong>: Dryness of the mouth and lips
            can be a sign of dehydration.
          </li>
          <li>
            <strong>Dark-colored urine</strong>: Urine that is dark yellow or
            amber in color indicates dehydration.
          </li>
          <li>
            <strong>Fatigue and dizziness</strong>: Dehydration can cause
            fatigue, dizziness, and lightheadedness.
          </li>
          <li>
            <strong>Headaches</strong>: Lack of water can trigger headaches and
            migraines.
          </li>
          <li>
            <strong>Dry skin</strong>: Dehydration can result in dry and flaky
            skin.
          </li>
        </ul>

        <p>
          If you experience any of these symptoms, it is important to drink
          water and rehydrate your body. Severe dehydration can be
          life-threatening and may require medical attention.
        </p>
      </Section>
      <Section theme="dark">
        <Balancer as="h2">
          How can you stay hydrated throughout the day?{' '}
        </Balancer>
        <p>
          Here are some practical tips to help you stay hydrated throughout the
          day:
        </p>
        <FunFact title="You can survive weeks without food, but only days without water">
          Water is crucial for maintaining bodily functions, including
          regulation of temperature, removal of waste, and digestion.
        </FunFact>
        <ol>
          <li>
            <strong>Carry a water bottle</strong>: Keep a reusable water bottle
            with you at all times to remind yourself to drink water regularly.
          </li>
          <li>
            <strong>Set reminders</strong>: Use a hydration app or set reminders
            on your phone to drink water at regular intervals.
          </li>
          <li>
            <strong>Infuse your water</strong>: Add slices of fruits or herbs to
            your water to enhance the flavor and make it more enjoyable to
            drink.
          </li>
          <li>
            <strong>Eat water-rich foods</strong>: Include fruits and vegetables
            with high water content, such as watermelon, cucumbers, and oranges,
            in your diet.
          </li>
          <li>
            <strong>Limit caffeine and alcohol</strong>: Both caffeine and
            alcohol can have a diuretic effect, increasing fluid loss. Limit
            your intake of these beverages and drink water alongside them.
          </li>
          <li>
            <strong>Drink water before, during, and after exercise</strong>:
            Hydrate before, during, and after physical activity to replenish the
            fluids lost through sweat.
          </li>
          <li>
            <strong>Monitor urine color</strong>: Check the color of your urine.
            If it is pale yellow or clear, it indicates that you are
            well-hydrated.
          </li>
        </ol>
      </Section>
      <Section>
        <Balancer as="h2">
          Beware The Dangers of Drinking Too Much Water
        </Balancer>
        <p>
          While it is important to stay hydrated, overhydration can have serious
          consequences. When we drink excessive amounts of water, our body's
          electrolyte balance can be disrupted, leading to a condition known as
          water intoxication or hyponatremia.
        </p>
        <p>
          This condition occurs when the sodium levels in our blood become
          diluted, causing cells to swell.
        </p>
      </Section>
      <Section theme="dark">
        <Balancer as="h2">What is Water Intoxication?</Balancer>
        <p>
          Water intoxication can occur due to various factors, including
          excessive water intake, certain medical conditions, and prolonged
          physical activity without proper hydration. The symptoms of water
          intoxication can vary and may include:
        </p>
        <ol>
          <li>Headaches</li>
          <li>Nausea and vomiting </li>
          <li>Confusion and disorientation</li>
          <li>Seizures</li>
          <li>Muscle weakness and cramps</li>
          <li>Fatigue and tiredness</li>
        </ol>
      </Section>
      <Section>
        <Balancer as="h2">What is Hyponatremia?</Balancer>
        <p>
          One of the most significant dangers of drinking too much water is the
          development of hyponatremia. Hyponatremia is a condition characterized
          by low sodium levels in the blood. Sodium is an essential electrolyte
          that helps regulate fluid balance in the body.
        </p>
        <p>
          When sodium levels become too diluted, it can lead to swelling of the
          cells and potentially life-threatening complications.
        </p>
      </Section>
      <Section theme="dark">
        <h2>How to Prevent Water Intoxication?</h2>

        <p>
          To prevent water intoxication and maintain proper hydration, it is
          essential to follow these guidelines:
        </p>

        <ol>
          <li>
            <strong>Drink water in moderation</strong>: While it is important to
            stay hydrated, avoid excessive water intake. Listen to your body's
            thirst cues and drink water when you feel thirsty.
          </li>

          <li>
            <strong>Monitor your urine color</strong>: Pay attention to the
            color of your urine. Clear or pale urine may indicate overhydration,
            while a light yellow color is a sign of proper hydration.
          </li>

          <li>
            <strong>Balance water intake with electrolytes</strong>: If you
            engage in prolonged physical activity or sweat excessively, consider
            replenishing electrolytes with sports drinks or electrolyte-rich
            foods.
          </li>

          <li>
            <strong>Consult a healthcare professional</strong>: If you have any
            concerns about your water intake or experience symptoms of
            overhydration, seek medical advice.
          </li>
        </ol>
      </Section>
    </>
  )
}
