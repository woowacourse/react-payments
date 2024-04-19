import { Visa, MasterCard, Dot } from '../../assets';
import * as S from './CardPreview.style';

import { CARD_NUMBER, CARD_PREFIX_PATTERNS } from '../../constants/condition';
import { cardNumbersType } from '../../types/cardNumbers';

interface CardPreviewProps {
  cardNumbers: cardNumbersType;
  month: string;
  year: string;
  owner: string;
}

function CardPreview({ cardNumbers, month, year, owner }: CardPreviewProps) {
  const handleLogoImage = (cardNumbers: cardNumbersType) => {
    if (Number(cardNumbers[0].charAt(0)) === CARD_PREFIX_PATTERNS.VISA_PREFIX) {
      return <img src={Visa} alt="비자 카드" />;
    }

    if (
      Number(cardNumbers[0].slice(0, 2)) >= CARD_PREFIX_PATTERNS.MASTER_CARD_PREFIX_MIN &&
      Number(cardNumbers[0].slice(0, 2)) <= CARD_PREFIX_PATTERNS.MASTER_CARD_PREFIX_MAX
    ) {
      return <img src={MasterCard} alt="마스터 카드" />;
    }
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.ChipBox />
        <S.LogoBox>{handleLogoImage(cardNumbers)}</S.LogoBox>
      </S.CardHeader>
      <S.CardBody>
        <S.InfoContainer>
          {cardNumbers.map((number, index) => (
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
