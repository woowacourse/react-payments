import { makeCardOwnerName, makeValidDate } from 'utils/processCard';

import { DisplayCard } from 'components/Card';
import { State } from 'types';
import { memo } from 'react';
import styled from 'styled-components';

const Card = styled(DisplayCard)`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

type Props = {
  cardList: State['cardList'];
};

function Cards({ cardList }: Props) {
  return (
    <>
      {cardList.map(card => {
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
            cardName={cardName}
            company={cardCompany}
            ownerName={makeCardOwnerName(cardOwnerName)}
            number={cardNumber}
            size="medium"
            validDate={makeValidDate(validDate)}
            key={cardNumber}
          />
        );
      })}
    </>
  );
}

export default memo(Cards);
