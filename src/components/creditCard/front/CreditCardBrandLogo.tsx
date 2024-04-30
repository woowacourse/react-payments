import { CardNumber } from "../../../@types/CreditCard";
import CARD_THRESHOLD from "../../../constants/cardThreshold";
import styled from "@emotion/styled";
import VisaCard from "/public/img/Visa.png";
import MasterCard from "/public/img/Mastercard.png";

interface CreditCardBrandLogoProps {
  creditCardNumber: CardNumber;
}

const getFirstTwoNumber = (creditCardNumber: CardNumber): number | undefined => {
  const twoDigits = 2;

  if (creditCardNumber && creditCardNumber.length >= twoDigits)
    return Number(creditCardNumber.slice(0, 2));
};

const CreditCardBrandLogo = ({ creditCardNumber }: CreditCardBrandLogoProps) => {
  const firstTwoNumber = getFirstTwoNumber(creditCardNumber);
  if (!firstTwoNumber) return;

  const isVisaCard =
    CARD_THRESHOLD.minimumVisaNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumVisaNumber;

  const isMasterCard =
    CARD_THRESHOLD.minimumMasterCardNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumMasterCardNumber;

  if (isVisaCard) return <CreditCardImg src={VisaCard} alt="비자카드 이미지" />;

  if (isMasterCard) return <CreditCardImg src={MasterCard} alt="마스터카드 이미지" />;
};

export default CreditCardBrandLogo;

const CreditCardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
