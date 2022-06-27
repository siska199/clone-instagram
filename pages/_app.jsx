import '../styles/globals.css'
import { SessionProvider, useSession, signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
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
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-black text-[2rem] font-thin text-white">
      Loading...
    </div>
  )
}

//Ref: https://medium.com/@rajputpraj/protected-route-username-in-react-nextjs-part-1-73ccbc200aae
