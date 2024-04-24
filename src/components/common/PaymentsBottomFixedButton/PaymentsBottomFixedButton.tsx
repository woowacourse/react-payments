import { ButtonText, FixedButton, FixedButtonContainer } from "./PaymentsBottomFixedButton.styled"

interface PaymentsBottomFixedButtonProps {
  text: string;
  onClick: () => void;
}

const PaymentsBottomFixedButton = (props: PaymentsBottomFixedButtonProps) => {
  const { text, onClick } = props

  return (
    <FixedButtonContainer>
      <FixedButton onClick={onClick}>
        <ButtonText>{text}</ButtonText>
      </FixedButton>
    </FixedButtonContainer>

  )
}

export default PaymentsBottomFixedButton;