import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Homepage from '../components/Homepage/Homepage'
import Login from '../components/Login/Login'
import { getProviders } from 'next-auth/react'

const index = ({providers}) => {
  const { data: session } = useSession()

  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{session ? <Homepage /> : <Login providers={providers} />}</main>
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
