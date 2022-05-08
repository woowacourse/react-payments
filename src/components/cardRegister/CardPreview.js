import styled from 'styled-components';

import { Card } from '../common/Card';
import { FlexWrapper } from '../common/styled';

export const CardPreview = ({ cardInfo, onClickCard }) => {
  return (
    <Style.CardPreviewLayout>
      <Card cardInfo={cardInfo} onClickCard={onClickCard} size="md" />
    </Style.CardPreviewLayout>
  );
};

const Style = {
  CardPreviewLayout: styled(FlexWrapper)`
    margin: 10px 0;
    justify-content: center;
  `,
};
