import './globals.css'
import localFont from 'next/font/local'

const helvetica = localFont({
  src: './fonts/Helvetica.ttf', 
  display: 'swap',
})


export const metadata = {
  title: 'THIS IS KOSTÜME'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={helvetica.className}>
      <body>{children}</body>
    </html>
  )
}
