import { forwardRef } from 'react'
import { InputBox } from 'components/common/Input/style'

type InputType = {
  type?: 'text' | 'password' | 'number'
  value: string
  maxLength?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = forwardRef(({ ...props }: InputType, ref: any) => {
  return <InputBox {...props} ref={ref} />
})

export default Input
