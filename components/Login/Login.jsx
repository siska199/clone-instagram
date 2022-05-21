import Image from 'next/image'
import imgBg from '../../public/landpage-img.png'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const Login = ({ providers }) => {

  return (
    <div className="m-auto flex  min-h-[100vh] max-w-[1500px]	items-center justify-center px-[1rem]">
      <div className="hidden lg:block">
        <Image className="object-coverk" src={imgBg} alt="" />
      </div>

      <div>
        <form className="items-center border-2 bg-white p-10 text-center">
          <h1 className='text-center font-["Billabong"] text-[4rem] font-medium	'>
            Instagram
          </h1>
          <div className="grid gap-y-2">
            <div className="input-container group ">
              <input
                name="email"
                className="input peer "
                type="text"
                required
              />
              <label
                htmlFor="email"
                className="label peer-valid:top-[0.1rem]  peer-valid:z-40 peer-valid:text-[0.7rem] "
              >
                Phone number, username, or email
              </label>
            </div>
            <div className="input-container group">
              <input
                name="password"
                className="input peer"
                type="password"
                required
              />
              <label
                htmlFor="password"
                className="label peer-valid:top-[-0.05rem] peer-valid:z-40 peer-valid:text-[0.7rem] "
              >
                Password
              </label>
            </div>

            <button
              className="mt-2 rounded-md bg-sky-500/100 p-[0.3rem] text-white disabled:opacity-50"
              disabled
            >
              Log In
            </button>
          </div>
          <div className="relative">
            <p className="before:content('') line mt-3 text-center font-medium text-gray-500">
              OR
            </p>
          </div>

          <div className="flex flex-col items-center justify-center ">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="my-5 flex items-center justify-center text-center font-medium text-[#385185]"
                >
                  <FcGoogle className="mr-2" /> Sign in with {provider.name}
                </button>
              </div>
            ))}

            <p className="cursor-pointer text-[0.8rem] text-[#385185]">
              Forgot password?
            </p>
          </div>
        </form>

        <div className="my-3 border-2 bg-white p-5 text-center">
          <p>
            Don't have an accound
            <Link href="">
              <a className="mx-2 font-medium text-[#385185]">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Login
