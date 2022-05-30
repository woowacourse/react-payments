import { MouseEventHandler } from 'react'
import { ButtonWrapper } from 'components/common/Button/style'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  color?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ children, ...props }: ButtonProps) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export default Button
