import { ICardInfo } from '../../types/type';
import * as Styled from './CardPreview.styled';
import MasterCardImage from '../../assets/Mastercard.png';
import VisaImage from '../../assets/Visa.png';
import CardNumbers from '../cardNumbers/CardNumbers';
import CardExpiration from '../cardExpiration/CardExpiration';
import { CARD_BRAND } from '../../constants/setting';

export interface CardFrontPreviewProps {
  cardInfo: ICardInfo;
}

const CardFrontPreview = ({ cardInfo }: CardFrontPreviewProps) => {
  const getCardBrandImage = () => {
    const IIN = Math.floor(Number(cardInfo.cardNumbers[0]) / 100);
    if (
      IIN >= CARD_BRAND.MASTERCARD.MIN_NUMBER &&
      IIN <= CARD_BRAND.MASTERCARD.MAX_NUMBER
    ) {
      return MasterCardImage;
    } else if (
      IIN >= CARD_BRAND.VISA.MIN_NUMBER &&
      IIN <= CARD_BRAND.VISA.MAX_NUMBER
    ) {
      return VisaImage;
    } else {
      return '';
    }
  };

  return (
    <Styled.CardPreviewContainer $cardBackground={cardInfo.cardCompany}>
      <Styled.ChipSection>
        <Styled.ICChip></Styled.ICChip>
        <Styled.CardBrand>
          <img src={getCardBrandImage()} alt={''} />
        </Styled.CardBrand>
      </Styled.ChipSection>
      <Styled.CardInfoSection>
        <CardNumbers cardNumbers={cardInfo.cardNumbers} />
        <CardExpiration
          month={cardInfo.cardExpiration[0]}
          year={cardInfo.cardExpiration[1]}
        />
        <div>{cardInfo.userName && cardInfo.userName}</div>
      </Styled.CardInfoSection>
    </Styled.CardPreviewContainer>
  );
};

export default CardFrontPreview;
