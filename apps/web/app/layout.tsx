import './globals.css'

export const metadata = {
  title: 'Tofu Racing',
  description: 'Waze-like social discovery para entusiastas gearhead.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
