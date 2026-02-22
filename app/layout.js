import './globals.css'

export const metadata = {
  title: 'Reflex',
  description: 'Принятие решений',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}