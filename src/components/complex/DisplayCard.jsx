import { memo } from 'react';
import styled from 'styled-components';

import { Card } from '../common';

const CardName = styled.div`
  color: #575757;
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
`;

function DisplayCard({
  bgColor,
  cardName,
  className,
  number,
  ownerName,
  validDate,
}) {
  return (
    <div className={className}>
      <Card
        bgColor={bgColor}
        size="medium"
        name={ownerName}
        number={number}
        validDate={validDate}
      />
      <CardName>{cardName}</CardName>
    </div>
  );
}

export default memo(DisplayCard);
