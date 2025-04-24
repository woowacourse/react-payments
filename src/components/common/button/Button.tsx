import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  padding: 20px 193px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #333;
  color: #f3f3f3;
  font-size: 16px;
  font-style: normal;
  line-height: 12px;
`;

type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>확인</StyledButton>;
}

export default Button;
