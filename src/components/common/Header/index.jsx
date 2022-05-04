import { HeaderWrapper } from 'components/common/Header/style'
import Button from 'components/common/Button'
import { ReactComponent as Arrow } from 'assets/arrow.svg'

function Header({ backButton, children }) {
  return (
    <HeaderWrapper>
      {backButton && (
        <Button>
          <Arrow />
        </Button>
      )}
      <h2>{children}</h2>
    </HeaderWrapper>
  )
}

export default Header
