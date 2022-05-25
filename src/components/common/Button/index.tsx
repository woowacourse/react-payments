import { ButtonWrapper } from 'components/common/Button/style'

type ButtonProps = {
  children: string | JSX.Element
  type: 'button' | 'submit'
  color?: string
}
function Button({ children, ...props }: ButtonProps) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export default Button
