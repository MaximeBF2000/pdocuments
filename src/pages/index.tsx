import { signOut, useSession } from 'next-auth/react'
import { withAuthProtect } from '@/hoc'
import { Button } from '@/components/atoms'
import { LayoutWithSidebar, DocumentEditor } from '@/components/organisms'

function Index() {
  const { data: session } = useSession()

  return (
    <LayoutWithSidebar>
      <Button className="self-end" onClick={() => signOut()}>
        SignOut
      </Button>
      <DocumentEditor />
    </LayoutWithSidebar>
  )
}

export default withAuthProtect(Index)
