import { ButtonText, ButtonWrapper } from "./PaymentsButton.styled"

interface PaymentsButtonProps {
  text: string;
  onClick: () => void;
  size?: ButtonSize,
}

const PaymentsButton = (props: PaymentsButtonProps) => {
  const { text, onClick, size } = props

  return (
    <ButtonWrapper onClick={onClick} size={size ?? 'full'}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>)
}
export default PaymentsButton