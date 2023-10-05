
import { Poppins, Bebas_Neue, Merriweather } from 'next/font/google'
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500','600','700']
})
 
export const merriweather =  Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300','400','700','900']
})