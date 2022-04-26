import PropTypes from 'prop-types';
import './input.css'

function Input({type, size, placeholder}) {
  return (
    <input type={type} className={['input-basic', `w-${size}`].join(' ')} placeholder={placeholder} />
  )
}

Input.propTypes = {
  /**
   * 입력창의 type
   */ 
  type: PropTypes.string,
  /**
   * 입력창의 크기
   */ 
  size: PropTypes.oneOf(['15', '25', '50', '100']),
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
} 

Input.defaultProps = {
    type: 'text',
    size: '100',
    onClick: undefined,
  };
  

export default Input

