import PaymentsButton from "../PaymentsButton/PaymentsButton";
import { FixedButtonContainer } from "./PaymentsBottomFixedButton.styled"

interface PaymentsBottomFixedButtonProps {
  text: string;
  onClick: () => void;
}

const PaymentsBottomFixedButton = (props: PaymentsBottomFixedButtonProps) => {

  return (
    <FixedButtonContainer>
      <PaymentsButton {...props} />
    </FixedButtonContainer>

  )
}

export default PaymentsBottomFixedButton;