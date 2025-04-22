import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const cardLayout = css`
  display: flex;
  flex-direction: column;

  width: 21.2rem;
  height: 13.2rem;
  margin-top: 7.7rem;

  border-radius: 5px;
  background-color: ${theme.color.cardBlack};
`;

export const cardContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 0.8rem;
`;

export const cardFrame = css`
  width: 5rem;
  height: 3rem;

  border-radius: 5px;
  background-color: ${theme.color.gold};
`;

export const cardType = css`
  width: 5rem;
  height: 3rem;
`;

export const cardContentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const cardContent = css`
  display: flex;
  align-items: center;

  margin-left: 1.7rem;
  gap: 10px;
`;

export const cardContentText = css`
  color: ${theme.color.white};
  ${theme.font.card.number}
`;

export const dynamicCardStyle = (cardBrandColor: string) => css`
  ${cardLayout}
  background-color: ${cardBrandColor};
`;
