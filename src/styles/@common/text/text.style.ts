import { css } from '@emotion/react';
import theme from '../../theme';

export const sectionTitle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export const sectionTitleText = css`
  color: ${theme.color.black};
  ${theme.font.cardNumberInput.title}
`;

export const sectionTitleSubText = css`
  color: ${theme.color.gray};
  ${theme.font.cardNumberInput.caption}
`;
