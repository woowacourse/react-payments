import styled, { TextType } from "styled-components";

const Text = styled.div<TextType>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default Text;
