/** Mifflin–St Jeor based daily water estimate (ml). Preserve these equations. */

export type WaterActivity = 'rare' | 'occasional' | 'weekly' | 'daily'
export type WaterSex = 'male' | 'female'

export type WaterIntakeInput = {
  gender: WaterSex | string
  weight: number // kg
  height: number // cm
  age: number
  activity: WaterActivity | string
}

const ACTIVITY_MULTIPLIER: Record<string, number> = {
  rare: 1.2,
  occasional: 1.55,
  weekly: 1.725,
  daily: 1.9,
}

export function calculateWaterIntakeMl(input: WaterIntakeInput): number {
  const { gender, weight, height, age, activity } = input
  if (!gender || !weight || !height || !age || !activity) return 0

  const bmr =
    gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161

  const multiplier = ACTIVITY_MULTIPLIER[activity] ?? 1
  return bmr * multiplier
}

export function mlToLiters(ml: number): number {
  return ml / 1000
}

export function mlToGlasses(ml: number, glassMl = 250): number {
  return ml / glassMl
}

export function mlToCups(ml: number, cupMl = 236.588): number {
  return ml / cupMl
}

export function mlToBottles(ml: number, bottleMl = 750): number {
  return ml / bottleMl
}

export function formatVolume(value: number, digits = 1): string {
  if (!Number.isFinite(value)) return '0'
  const rounded = Number(value.toFixed(digits))
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(digits)
}
