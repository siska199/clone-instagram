import '../styles/globals.css'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  useEffect(() => {
    if (status === 'loading') return
    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }
  return (
    <div className="h-full w-full flex items-center justify-center text-[2rem] font-thin text-white text-black">
      Loading...
    </div>
  )
}

//Ref: https://medium.com/@rajputpraj/protected-route-username-in-react-nextjs-part-1-73ccbc200aae
