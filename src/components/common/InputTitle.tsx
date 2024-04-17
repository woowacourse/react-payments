import styled from "styled-components";

interface InputTitleProps {
  text: string;
}

const InputTitle = ({ text }: InputTitleProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.h3`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

export default InputTitle;
