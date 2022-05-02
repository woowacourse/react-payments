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
      {inputInfo.map(({ type, id, placeholder, value, ref }, index) => (
        <Fragment key={index}>
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            ref={ref}
            onChange={(e) => onChange(e, index)}
            data-testid={id}
          />
        </Fragment>
      ))}
    </InputWrapper>
  )
}

export default InputBox
