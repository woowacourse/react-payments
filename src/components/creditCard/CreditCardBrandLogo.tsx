import styled from "@emotion/styled";
import { CardNumber } from "../../@types/CreditCard";
import CARD_THRESHOLD from "../../constants/cardThreshold";

const getFirstTwoNumber = (creditCardNumber: CardNumber): number | undefined => {
  const twoDigits = 2;

  if (creditCardNumber && creditCardNumber.length >= twoDigits)
    return Number(creditCardNumber.slice(0, 2));
};

const CreditCardBrandLogo = (creditCardNumber: CardNumber): JSX.Element | undefined => {
  const firstTwoNumber = getFirstTwoNumber(creditCardNumber);
  if (!firstTwoNumber) return;

  if (
    CARD_THRESHOLD.minimumVisaNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumVisaNumber
  )
    return <CreditCardImg src="/img/Visa.png" alt="비자카드 이미지" />;

  if (
    CARD_THRESHOLD.minimumMasterCardNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumMasterCardNumber
  )
    return <CreditCardImg src="/img/Mastercard.png" alt="마스터카드 이미지" />;
};

export default CreditCardBrandLogo;

const CreditCardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
