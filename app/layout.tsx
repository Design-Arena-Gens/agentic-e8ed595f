import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wolf and Pig - 3D Animation',
  description: 'A wolf blowing at a wooden house with a scared pig inside',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>{children}</body>
    </html>
  )
}
