import { useEffect } from 'react';
import styled from 'styled-components';

import CardText from './CardText';
import CardNumberDisplay from './CardNumberDisplay';
import ExpirationDateDisplay from './ExpirationDateDisplay';

import { CardCompany, CardInfo } from '../../types/card';

import useCardLogo from '../../hooks/useCardType';
import { CARD_COLOR } from '../../constants/card-app';
import CardCVCNumberDisplay from './CardCVCNumberDisplay';

interface CardPreviewProps {
  cardInfo: CardInfo;
  isCardFront: boolean;
}

const CardPreview = ({ cardInfo, isCardFront }: CardPreviewProps) => {
  const { cardNumbers, expirationDate, cardOwnerName, cardCompany, cardCVCNumber } = cardInfo;

  const { cardType, identifyCardType } = useCardLogo();

  useEffect(() => {
    identifyCardType(cardNumbers[0]);
  }, [cardNumbers, identifyCardType]);

  return (
    <>
      {isCardFront && (
        <CardFront company={cardCompany}>
          <CardHeader>
            <CardChip />
            {cardType && <CardLogo src={cardType} />}
          </CardHeader>

          <CardBody>
            <CardNumberDisplay cardNumbers={cardNumbers} />
            <ExpirationDateDisplay expirationDate={expirationDate} />
            <CardText type='longText' text={cardOwnerName} />
          </CardBody>
        </CardFront>
      )}
      {!isCardFront && (
        <CardBack>
          <CardCVCLine>
            <CardCVCNumberDisplay cardCVCNumber={cardCVCNumber} />
          </CardCVCLine>
        </CardBack>
      )}
    </>
  );
};

export default CardPreview;

const CardFront = styled.div<{ company: CardCompany | '' }>`
  height: 132px;
  width: 212px;

  color: #ffffff;
  border-radius: 4px;
  background-color: ${({ company }) => (company ? CARD_COLOR[company] : '#333333')};
  box-shadow: 3px 3px 5px 0px #00000040;

  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
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

const CardBack = styled.div`
  position: relative;

  height: 132px;
  width: 212px;

  color: #ffffff;
  border-radius: 4px;
  background-color: #d5d5d5;
  box-shadow: 3px 3px 5px 0px #00000040;

  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const CardCVCLine = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  height: 24px;
  width: 212px;

  top: 84px;

  background-color: #cbba64;
`;
