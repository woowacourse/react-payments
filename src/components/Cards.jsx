import { memo } from 'react';
import styled from 'styled-components';

import { DisplayCard } from './complex';

const Card = styled(DisplayCard)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

function Cards() {
  return (
    <>
      <Card
        bgColor="#ADD8E6"
        cardName="법카"
        number="1111 2222 •••• ••••"
        ownerName="HALEE"
        validDate="05/22"
      />
      <Card
        bgColor="#ADD8E6"
        cardName="개카"
        number="1111 2222 •••• ••••"
        ownerName="HALEE"
        validDate="05/22"
      />
    </>
  );
}

export default memo(Cards);
