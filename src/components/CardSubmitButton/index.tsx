import styled from 'styled-components';

interface CardSubmitButtonProps {
  isDisplay: boolean;
  onInputFormSubmit: () => void;
}

const CardSubmitButton = ({ isDisplay, onInputFormSubmit }: CardSubmitButtonProps) => {
  return (
    <StyledButton type='submit' onClick={onInputFormSubmit} hidden={!isDisplay}>
      확인
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 375px;
  height: 52px;

  font-size: 16px;
  font-weight: 700;
  line-height: 12px;

  background-color: #333333;
  color: #f3f3f3;

  z-index: 1000;
  cursor: pointer;
`;

export default CardSubmitButton;
