import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const inputContainer = css`
  display: flex;
  height: 3.2rem;
  padding: 0.8rem;
  align-items: center;
  gap: 0.8rem;

  flex: 1 0 0;
  width: 100%;

  border-radius: 2px;
  border: 1.015px solid var(--Stroke, #acacac);
`;

export const inputLabel = css`
  ${theme.font.input.label}
  color: ${theme.color.text};
`;
