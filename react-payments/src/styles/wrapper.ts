import styled, { FlexWrapper } from "styled-components";

export const RowFlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  gap: ${({ gap }) => `${gap}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
`;

export const ColumnFlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  gap: ${({ gap }) => `${gap}px`};
`;
