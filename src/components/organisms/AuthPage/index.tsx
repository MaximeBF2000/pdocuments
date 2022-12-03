import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { Button } from '@components/atoms'

export const AuthPage: React.FC = () => {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex-center">
      <div className="w-1/3 bg-white px-12 py-16 rounded shadow-sm border">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-black mb-2">PDocuments</h1>
          <p className="text-gray-500">Manage & share your documents easily</p>
        </div>
        <Button onClick={() => signIn('google')} className="mx-auto">
          Login with Google
        </Button>
        <p className="italic">{JSON.stringify({ session })}</p>
      </div>
    </div>
  )
}
