import PropTypes from 'prop-types';
import {ButtonWrapper} from './style'

function Button({label, color}){
  return(<ButtonWrapper type="button" color={color}>{label}</ButtonWrapper>)
}

Button.propTypes = {
  color: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
}

export default Button;