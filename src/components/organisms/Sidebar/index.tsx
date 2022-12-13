import React from 'react'
import { StyledSidebar, SidebarLayout, Main } from './Sidebar.styled'

interface Props {
  children: any
}

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar
      className={
        'fixed top-0 bottom-0 left-0 border-r border-gray-300 bg-white p-4'
      }
    >
      Sidebar
    </StyledSidebar>
  )
}

export const LayoutWithSidebar: React.FC<Props> = ({ children }) => {
  return (
    <SidebarLayout className="relative min-h-screen w-full p-4">
      <Sidebar />
      <Main>{children}</Main>
    </SidebarLayout>
  )
}
