import styled from 'styled-components';

import { Card } from '../common/Card';

export const CardPreview = ({ cardInfo, onClickCard }) => {
  return (
    <Style.CardPreviewLayout>
      <Card cardInfo={cardInfo} onClickCard={onClickCard} size="md" />
    </Style.CardPreviewLayout>
  );
};

const Style = {
  CardPreviewLayout: styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
  `,
};
