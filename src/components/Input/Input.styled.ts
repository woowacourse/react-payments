import styled, { css } from "styled-components";
import { COLORS } from "../../styles/tokens";

export const InputCSS = styled.input<{ $isError?: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1.01px solid ${COLORS.gray100};
  padding: 0 8px;

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${COLORS.red};
    `}
`;
