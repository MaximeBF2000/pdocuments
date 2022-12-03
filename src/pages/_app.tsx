import { SessionProvider } from 'next-auth/react'
import '../global.css'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <div className="bg-gray-100 min-h-screen">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
