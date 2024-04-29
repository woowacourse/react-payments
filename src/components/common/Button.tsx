import styled from "@emotion/styled";

interface ButtonProps {
  content: string;
  onClick: () => void;
  width?: string;
  disabled?: boolean;
  position?: string;
  bottom?: string;
}

const Button = ({ content, onClick, width, disabled }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} width={width} disabled={disabled}>
      {content}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{
  width?: string;
  position?: string;
  bottom?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: 52px;
  position: ${(props) => props.position || "static"};
  bottom: ${(props) => props.bottom || "auto"};
  padding: 20px;
  background: rgba(51, 51, 51, 1);
  border: none;
  border-radius: 5px;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 12px;
  color: rgba(243, 243, 243, 1);

  cursor: pointer;
`;
