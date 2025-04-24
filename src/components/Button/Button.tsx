import styled from '@emotion/styled';

type buttonProps = {
  text: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  height: 52px;
  gap: 10px;
  background-color: #333333;
  color: #fff;
  white-space: nowrap;
  font-weight: 700;
  cursor: pointer;
`;
const Button = (props: buttonProps) => {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};

export default Button;
