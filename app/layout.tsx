import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mentoría Empresarial - Libera tu Flujo de Caja',
  description: 'Programa de mentoría 1:1 para liberar tu flujo de caja en 90 días con un método probado y auténtico.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}



