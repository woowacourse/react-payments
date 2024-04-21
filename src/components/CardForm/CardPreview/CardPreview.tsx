import { isVisaCard, isMasterCard } from '../../../domain/Card';
import { Visa, MasterCard, Dot } from '../../../assets';
import { CARD_NUMBER } from '../../../constants/Condition';
import * as S from './CardPreview.style';

interface CardPreviewProps {
  cardNumber: string[];
  month: string;
  year: string;
  owner: string;
}

function CardPreview({ cardNumber, month, year, owner }: CardPreviewProps) {
  const makeCardLogoImage = (cardNumber: string[]) => {
    if (isVisaCard(cardNumber)) {
      return <img src={Visa} alt="비자 카드" />;
    }

    if (isMasterCard(cardNumber)) {
      return <img src={MasterCard} alt="마스터 카드" />;
    }
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.ChipBox />
        <S.LogoBox>{makeCardLogoImage(cardNumber)}</S.LogoBox>
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
