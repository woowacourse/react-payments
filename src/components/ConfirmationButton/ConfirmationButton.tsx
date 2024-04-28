import MESSAGE from '../../constants/Message';
import { StyledButton } from './style';

interface ConfirmationButtonProps {
  isSubmit: boolean;
  onClick: () => void;
}

const ConfirmationButton = ({ isSubmit, onClick }: ConfirmationButtonProps) => {
  return (
    <StyledButton $submit={isSubmit} onClick={onClick}>
      {MESSAGE.LABEL.confirmationbutton}
    </StyledButton>
  );
};

export default ConfirmationButton;
