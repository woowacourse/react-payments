import styled from 'styled-components';
import BasicButton from '../common/Button';

interface CardSubmitButtonProps {
  isDisplay: boolean;
  onInputFormSubmit: () => void;
}

const CardSubmitButton = ({
  isDisplay,
  onInputFormSubmit,
}: CardSubmitButtonProps) => {
  return (
    <StyledButton
      content='확인'
      onClick={onInputFormSubmit}
      type='submit'
      hidden={!isDisplay}
    />
  );
};

const StyledButton = styled(BasicButton)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 375px;
  height: 52px;

  z-index: 1000;
`;

export default CardSubmitButton;
