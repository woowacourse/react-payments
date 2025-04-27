import { css } from '@emotion/react';
import theme from '../../styles/theme';

export const cardLayout = css`
  position: relative;
  top: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 77px 0 45px 0;
`;

export const cardSection = css`
  display: flex;
  flex-direction: column;
  width: 212px;
  height: 132px;

  border-radius: 5px;
  background-color: ${theme.color.cardBlack};
  box-shadow: 3px 3px 5px 0 #00000040;
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  width: 212px;
  height: 132px;
  margin: 8px 0 0 0;
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
