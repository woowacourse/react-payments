import PropTypes from 'prop-types';
import {ButtonWrapper} from './style'

function Button({children, color}){
  return(<ButtonWrapper type="button" color={color}>{children}</ButtonWrapper>)
}

Button.propTypes = {
  color: PropTypes.string,
  /**
   * Button contents
   */
   children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
   ]),
}

export default Button;