import PropTypes from 'prop-types'
import { ButtonWrapper } from 'components/common/Button/style'
function Button({ children, color, onClick }) {
  return (
    <ButtonWrapper type="button" color={color} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  /**
   * Button contents
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default Button
