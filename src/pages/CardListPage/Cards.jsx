import { memo } from 'react';
import styled from 'styled-components';

import { DisplayCard } from '../../components/Card';
import { splitCardNumbers } from '../../utils/regExp';

const Card = styled(DisplayCard)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

function Cards({ cards }) {
  return (
    <>
      {cards.map(card => {
        const {
          cardColor,
          cardCompany,
          cardName,
          cardOwnerName,
          cardNumber,
          validDate,
        } = card;

        return (
          <Card
            bgColor={cardColor}
            company={cardCompany}
            size="medium"
            cardName={cardName}
            ownerName={cardOwnerName}
            number={splitCardNumbers(cardNumber, ' ')}
            validDate={validDate}
            key={cardNumber}
          />
        );
      })}
    </>
  );
}

export default memo(Cards);
