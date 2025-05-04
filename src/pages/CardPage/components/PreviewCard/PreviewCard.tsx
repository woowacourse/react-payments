import { checkCardType } from './checkCardType';
import { CARD_COLOR } from '../../../../constants/settings';
import {
  StyledCardHeader,
  StyledCardNumber,
  StyledCardNumberWrapper,
  StyledCardType,
  StyledExpirationDate,
  StyledICChip,
  StyledPreviewCard,
} from './Preview.styles';

type PreviewCardProps = {
  cardNumber: string[];
  expirationDate: string[];
  cardCompany: string;
};

const PreviewCard = ({ cardNumber, expirationDate, cardCompany }: PreviewCardProps) => {
  const cardType = checkCardType(cardNumber[0]);
  const cardColor = CARD_COLOR[cardCompany] || CARD_COLOR[''];

  return (
    <StyledPreviewCard backgroundColor={cardColor}>
      <StyledCardHeader>
        <StyledICChip />
        {cardType && <StyledCardType src={cardType} />}
      </StyledCardHeader>
      <StyledCardNumberWrapper>
        {cardNumber.map((number, idx) => (
          <StyledCardNumber key={idx}>
            {idx >= 2 ? '•'.repeat(number.length) : number}
          </StyledCardNumber>
        ))}
      </StyledCardNumberWrapper>

      <StyledExpirationDate>
        {expirationDate.join('/').length > 1 && expirationDate.join('/')}
      </StyledExpirationDate>
    </StyledPreviewCard>
  );
};

export default PreviewCard;
