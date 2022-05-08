import { useContext } from 'react';
import styled from 'styled-components';
import { CardInfoContext } from '../../providers/CardInfoProvider';

import { Card } from '../common/Card';

export const CardPreview = ({ onClickCard }) => {
  const context = useContext(CardInfoContext);

  return (
    <Style.CardPreviewLayout>
      <Card cardInfo={context.cardInfo} onClickCard={onClickCard} size="md" />
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
