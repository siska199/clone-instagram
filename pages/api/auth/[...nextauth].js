import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/landingpage',
  },
  callbacks: {
    //modified session callback
    async session({ session, token, user }) {
      console.log('session: ', session)
      console.log('token: ', token)
      console.log('user: ', user)
      session.user.username = session.user.name.split(' ')[0].toLowerCase()+'199'
      session.user.uid = token.sub
      return session
    },
  },
})
