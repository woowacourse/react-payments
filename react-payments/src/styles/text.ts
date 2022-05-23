import styled, { css, TextType } from "styled-components";

const Text = styled.div<TextType>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline #2ac1bc;
    `}
`;

export default Text;
