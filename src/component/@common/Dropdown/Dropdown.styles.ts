import { css } from '@emotion/react';
import theme from '../../../styles/theme';

export const dropdownContainer = css`
  position: relative;
  padding: 3.1rem;
  width: 100%;
`;

export const dropdownSelect = css`
  appearance: none;
  width: 100%;
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
  color: ${theme.color.gray};
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
`;

export const dropdownArrow = css`
  position: absolute;
  right: 4rem;
  top: 40%;
  pointer-events: none;
`;

export const dropdownOption = css`
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
`;
