import styled from "@emotion/styled";
import { CardNumber } from "../../@types/CreditCard";
import CARD_THRESHOLD from "../../constants/cardThreshold";
import VISACARD from "/public/img/Visa.png";
import MASTERCARD from "/public/img/Mastercard.png";

const getFirstTwoNumber = (creditCardNumber: CardNumber): number | undefined => {
  const twoDigits = 2;

  if (creditCardNumber && creditCardNumber.length >= twoDigits)
    return Number(creditCardNumber.slice(0, 2));
};

const CreditCardBrandLogo = ({ creditCardNumber }: { creditCardNumber: CardNumber }) => {
  const firstTwoNumber = getFirstTwoNumber(creditCardNumber);

  if (!firstTwoNumber) return <></>;

  if (
    CARD_THRESHOLD.minimumVisaNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumVisaNumber
  )
    return <CreditCardImg src={VISACARD} alt="비자카드 이미지" />;

  if (
    CARD_THRESHOLD.minimumMasterCardNumber <= firstTwoNumber &&
    firstTwoNumber <= CARD_THRESHOLD.maximumMasterCardNumber
  )
    return <CreditCardImg src={MASTERCARD} alt="마스터카드 이미지" />;

  return <></>;
};

export default CreditCardBrandLogo;

const CreditCardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
