import styled from 'styled-components';

import { CardLayout as StyleCardLayout } from './CardLayout';

export const EmptyCard = ({ size, onClickCard }) => {
  return (
    <StyleCardLayout size={size} onClickCard={onClickCard}>
      <Style.Text>+</Style.Text>
    </StyleCardLayout>
  );
};

const Style = {
  Text: styled.span`
    font-size: 24px;
  `,
};
