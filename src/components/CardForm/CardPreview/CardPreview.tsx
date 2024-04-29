import { isVisaCard, isMasterCard } from '../../../domain/Card';
import type { CardCompany } from '../../../domain/Card.type';

import { CARD_NUMBER, CARD_COMPANY } from '../../../constants/Condition';
import { Visa, MasterCard, Dot } from '../../../assets';

import * as S from './CardPreview.style';

interface CardPreviewProps {
  cardNumber: string[];
  month: string;
  year: string;
  owner: string;
  company: CardCompany;
  cvc: string;
  isCVCInput: boolean;
}

const CardPreview = ({ cardNumber, month, year, owner, company, cvc, isCVCInput }: CardPreviewProps) => {
  const makeCardLogoImage = (cardNumbers: string[]) => {
    if (isVisaCard(cardNumbers)) {
      return <img src={Visa} alt="비자 카드" />;
    }

    if (isMasterCard(cardNumbers)) {
      return <img src={MasterCard} alt="마스터 카드" />;
    }
  };

  const makeMaskedNumber = (length: number) =>
    Array.from({ length }).map((_, idx) => <img src={Dot} key={idx} alt="dot" />);

  const renderCardNumber = (number: string, index: number) => (index <= 1 ? number : makeMaskedNumber(number.length));

  const renderCardFront = () => (
    <S.CardFront $isCVCInput={isCVCInput} $background={CARD_COMPANY[company]}>
      <S.CardHeader>
        <S.ChipBox />
        <S.LogoBox>{makeCardLogoImage(cardNumber)}</S.LogoBox>
      </S.CardHeader>
      <S.CardBody>
        <S.InfoContainer>
          {cardNumber.map((number, index) => (
            <S.InfoBox $length={CARD_NUMBER.INPUT_FIELD_COUNT} key={index}>
              {number ? renderCardNumber(number, index) : ''}
            </S.InfoBox>
          ))}
        </S.InfoContainer>
        <S.InfoBox>{(month || year) && `${month} / ${year}`}</S.InfoBox>
        <S.InfoBox>{owner}</S.InfoBox>
      </S.CardBody>
    </S.CardFront>
  );

  const renderCardBack = () => (
    <S.CardBack $isCVCInput={isCVCInput}>
      <S.CVCBox>
        <p>{cvc}</p>
      </S.CVCBox>
    </S.CardBack>
  );

  return (
    <S.CardContainer>
      <S.CardInner>
        {renderCardFront()}
        {renderCardBack()}
      </S.CardInner>
    </S.CardContainer>
  );
};

export default CardPreview;
