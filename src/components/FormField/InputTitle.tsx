import styled from "styled-components";

interface InputTitleProps {
  text: string;
}

const InputTitle = ({ text }: InputTitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;

  color: #000000;
`;

export default InputTitle;
