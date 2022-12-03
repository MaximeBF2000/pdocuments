import React from 'react'
import { useSession } from 'next-auth/react'
import { AuthPage } from '@/components/organisms'

export const withAuthProtect = (Component: React.FC) => {
  return ({ ...props }) => {
    const { data: session, status } = useSession()

    if (session) return <Component {...props} />

    return <AuthPage />
  }
}
