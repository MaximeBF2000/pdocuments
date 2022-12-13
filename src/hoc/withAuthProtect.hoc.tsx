import React from 'react'
import { useSession } from 'next-auth/react'
import { AuthPage } from '@/components/organisms'

export const withAuthProtect = (Component: React.FC) => {
  // eslint-disable-next-line react/display-name
  return ({ ...props }) => {
    const { data: session } = useSession()

    if (session) return <Component {...props} />

    return <AuthPage />
  }
}
