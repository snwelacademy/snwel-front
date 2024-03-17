import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrencySymbol(currencyCode: string){
  const currencySymbolMap = {
    'INR': '₹',
    'USD': '$'
  };

  return currencySymbolMap[currencyCode.toLocaleUpperCase() as keyof typeof currencySymbolMap] || ''
}
