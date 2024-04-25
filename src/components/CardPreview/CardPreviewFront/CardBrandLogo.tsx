import styled from 'styled-components';
import MasterCardLogo from '../../../../src/assets/images/mastercard.png';
import VisaCardLogo from '../../../../src/assets/images/visa.png';

interface ICardBrandLogoProps {
  firstTwoDigits: string;
}

type LogoImageSrc = string;

const VISA_FIRST_DIGIT = '4';
const MIN_MASTER_FIRST_TWO_DIGITS = 51;
const MAX_MASTER_FIRST_TWO_DIGITS = 55;

const getCardBrandLogo = (firstTwoDigits: string): LogoImageSrc | null => {
  if (firstTwoDigits[0] === VISA_FIRST_DIGIT) {
    return VisaCardLogo;
  } else if (
    Number(firstTwoDigits) >= MIN_MASTER_FIRST_TWO_DIGITS &&
    Number(firstTwoDigits) <= MAX_MASTER_FIRST_TWO_DIGITS
  ) {
    return MasterCardLogo;
  }

  return null;
};

const CardBrandLogo = ({ firstTwoDigits }: ICardBrandLogoProps) => {
  const matchedLogo = getCardBrandLogo(firstTwoDigits);

  if (!matchedLogo) {
    return null;
  }

  return (
    <BrandLogoContainer>
      <StyledImage src={matchedLogo} />
    </BrandLogoContainer>
  );
};

const BrandLogoContainer = styled.div`
  width: 50px;
  border-radius: 5px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default CardBrandLogo;
