import styled from 'styled-components';

interface ButtonProps {
  buttonText: string;
  color: string;
  background: string;
}

function Button({ buttonText, color, background }: ButtonProps) {
  return (
    <StyledButton $color={color} $background={background}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $color: string; $background: string }>`
  width: 100%;
  padding: 10px;

  color: ${(props) => props.$color};
  text-align: center;
  font-family: Noto Sans KR;
  font-weight: 700;
  font-size: 16px;
  background-color: ${(props) => props.$background};
`;

export default Button;
