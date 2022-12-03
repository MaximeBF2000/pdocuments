import styled from 'styled-components'

const SIDEBAR_WIDTH = 250

export const StyledSidebar = styled.aside`
  width: ${SIDEBAR_WIDTH}px;
`

export const SidebarLayout = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  width: 100%;
  background-color: #eeeeee;
`

export const Main = styled.main`
  width: calc(100% - ${SIDEBAR_WIDTH}px);
`
