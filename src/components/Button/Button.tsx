import styled from '@emotion/styled';

type buttonProps = {
  text: string;
};

const StyledButton = styled.button`
  height: 52px;
  gap: 10px;
  background-color: #333333;
  color: #fff;
  white-space: nowrap;
  font-weight: 700;
`;
const Button = (props: buttonProps) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
