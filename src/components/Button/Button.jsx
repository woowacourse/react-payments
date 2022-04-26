import PropTypes from 'prop-types';
import './button.css'

function Button({label, color}){
  return(<button type="button" className="button-basic" style={color && { color }}>{label}</button>)
}

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
}

export default Button;