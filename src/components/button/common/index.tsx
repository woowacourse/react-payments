import styled from "@emotion/styled";

interface ButtonProps {
  content: string;
  onClick: () => void;
  styles?: React.CSSProperties;
}

const Button = ({ content, onClick, styles }: ButtonProps) => {
  return (
    <ButtonBox onClick={onClick} style={styles}>
      {content}
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  width: 100%;
  background: #333333;
  color: #f3f3f3;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  border: none;

  &: hover {
    cursor: pointer;
  }
`;
