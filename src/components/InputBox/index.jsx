import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { InputWrapper } from 'components/InputBox/style'
import { Input } from 'components/Input/style'

function InputBox({ inputInfo, size, background, border, error, onChange }) {
  return (
    <InputWrapper
      background={background}
      border={border}
      size={size}
      error={error}
    >
      {inputInfo.map(({ type, id, placeholder, value, ref, key }, index) => (
        <Fragment key={index}>
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            ref={ref}
            onChange={(e) => onChange(e, key ? key : index)}
            data-testid={id}
          />
        </Fragment>
      ))}
    </InputWrapper>
  )
}

InputBox.propTypes = {
  inputInfo: PropTypes.array,
  /**
   * input 넓이
   */
  size: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
}

export default InputBox
