import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { slideInUp } from '../../component/@common/Funnel/Funnel.style';

export const cardFormCompleteLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;

  animation: ${slideInUp} 0.5s ease-out forwards;
`;

export const contentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 50rem;
  text-align: center;
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const detailsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  margin: 1rem 0;

  p {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid ${theme.color.gray};
  }
`;

export const cardDetailContainer = css`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const cardDetailText = css`
  ${theme.font.default.text}
`;
