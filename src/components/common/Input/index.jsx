import { forwardRef } from 'react'
import { InputWrapper } from 'components/common/Input/style'

const Input = forwardRef((props, ref) => {
  const { type, dataset, ...rest } = props
  return (
    <InputWrapper
      type={type ? type : 'text'}
      data-key={dataset}
      ref={ref}
      {...rest}
    />
  )
})

export default Input
