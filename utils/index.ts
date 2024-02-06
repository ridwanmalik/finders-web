import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

// Get Country Flag
export const getCountryFlag = (country: string) => {
  return `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${country.toLowerCase()}.svg`
}
