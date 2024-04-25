import styled from 'styled-components';

interface CardConfirmButtonProps {
  onClick: () => void;
}

const CardConfirmButton = ({ onClick }: CardConfirmButtonProps) => {
  return <StyledButton onClick={onClick}>확인</StyledButton>;
};

const StyledButton = styled.button`
  width: 320px;
  height: 44px;

  font-size: 15px;
  font-weight: 700;
  line-height: 12px;

  border-radius: 5px;

  background-color: #333333;
  color: #f3f3f3;

  cursor: pointer;
`;

export default CardConfirmButton;
