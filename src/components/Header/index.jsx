import { HeaderWrapper } from './style'

function Header({children}) {
  return (
    <HeaderWrapper>
      {children}
    </HeaderWrapper>
  )
}

export default Header;