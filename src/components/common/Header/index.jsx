import { HeaderWrapper } from 'components/common/Header/style'
import Button from 'components/common/Button'
import { ReactComponent as Arrow } from 'assets/arrow.svg'

function Header({ backButton, headerText }) {
  return (
    <HeaderWrapper>
      {backButton && (
        <Button>
          <Arrow />
        </Button>
      )}
      <h2>{headerText}</h2>
    </HeaderWrapper>
  )
}

export default Header
