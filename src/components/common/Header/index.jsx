import { useNavigate } from 'react-router-dom'

import { HeaderWrapper } from 'components/common/Header/style'
import Button from 'components/common/Button'
import { ReactComponent as Arrow } from 'assets/arrow.svg'

function Header({ backButton, children }) {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      {backButton && (
        <Button onClick={() => navigate(-1)}>
          <Arrow />
        </Button>
      )}
      <h2>{children}</h2>
    </HeaderWrapper>
  )
}

export default Header
