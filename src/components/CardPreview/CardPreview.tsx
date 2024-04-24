import { useEffect } from 'react';
import styled from 'styled-components';

import CardText from './CardText';
import CardNumberDisplay from './CardNumberDisplay';
import ExpirationDateDisplay from './ExpirationDateDisplay';

import { CardInfo } from '../../types/card';

import useCardLogo from '../../hooks/useCardType';

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const CardPreview = ({ cardInfo }: CardPreviewProps) => {
  const { cardNumbers, expirationDate, cardOwnerName } = cardInfo;

  const { cardType, identifyCardType } = useCardLogo();

  useEffect(() => {
    identifyCardType(cardNumbers[0]);
  }, [cardNumbers, identifyCardType]);

  return (
    <StyledCardPreview>
      <CardHeader>
        <CardChip />
        {cardType && <CardLogo src={cardType} />}
      </CardHeader>

      <CardBody>
        <CardNumberDisplay cardNumbers={cardNumbers} />
        <ExpirationDateDisplay expirationDate={expirationDate} />
        <CardText type='longText' text={cardOwnerName} />
      </CardBody>
    </StyledCardPreview>
  );
};

export default CardPreview;

const StyledCardPreview = styled.div`
  height: 132px;
  width: 212px;

  color: #ffffff;
  border-radius: 4px;
  background-color: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;

  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
`;

const CardChip = styled.div`
  height: 22px;
  width: 36px;

  border-radius: 4px;
  background-color: #ddcd78;
`;

const CardLogo = styled.img`
  height: 22px;
  width: 36px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0px 0px 17px 17px;

  row-gap: 8px;
`;
