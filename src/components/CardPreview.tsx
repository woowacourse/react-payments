import { Visa, MasterCard, Dot } from '../assets';
import * as S from '../styles/CardPreview.style';

import { CARD, CARD_NUMBER } from '../constants/Condition';

interface CardPreviewProps {
  cardNumber: string[];
  month: string;
  year: string;
  owner: string;
}

function CardPreview({ cardNumber, month, year, owner }: CardPreviewProps) {
  const handleLogoImage = (cardNumber: string[]) => {
    if (Number(cardNumber[0].charAt(0)) === CARD.VISA) {
      return <img src={Visa} />;
    }

    if (
      Number(cardNumber[0].slice(0, 2)) >= CARD.MIN_MASTER_CARD &&
      Number(cardNumber[0].slice(0, 2)) <= CARD.MAX_MASTER_CARD
    ) {
      return <img src={MasterCard} />;
    }
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.ChipBox />
        <S.LogoBox>{handleLogoImage(cardNumber)}</S.LogoBox>
      </S.CardHeader>
      <S.CardBody>
        <S.InfoContainer>
          {cardNumber.map((number, index) => (
            <S.InfoBox $length={CARD_NUMBER.INPUT_FIELD_COUNT} key={index}>
              {number
                ? index <= 1
                  ? `${number} `
                  : Array.from({ length: CARD_NUMBER.INPUT_FIELD_COUNT }).map((_, idx) => (
                      <img src={Dot} key={idx} alt="dot" />
                    ))
                : ''}
            </S.InfoBox>
          ))}
        </S.InfoContainer>
        <S.InfoBox>{(month || year) && `${month} / ${year}`}</S.InfoBox>
        <S.InfoBox>{owner}</S.InfoBox>
      </S.CardBody>
    </S.Card>
  );
}

export default CardPreview;
