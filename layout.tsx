import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReactPay — Trustless Freelance Escrow on Somnia',
  description: 'Autonomous escrow powered by Somnia Reactivity. No middlemen. No fees. No trust required.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
