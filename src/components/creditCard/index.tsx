import {
  CardNumberValue,
  ExpirationPeriodValue,
  InfoValue,
  OwnerValue,
} from "../../@types/CreditCard";
import { CardType } from "../../constants/cardType";
import SIGN from "../../constants/sign";
import CreditCardBack from "./back";
import CreditCardFront from "./front";

interface CreditCardProps {
  showPreviewCardBack: boolean;
  expirationPeriod: ExpirationPeriodValue;
  cardNumber: CardNumberValue;
  owner: OwnerValue;
  selected: CardType | undefined;
  info: InfoValue;
}

const CreditCard = ({
  showPreviewCardBack,
  expirationPeriod,
  cardNumber,
  owner,
  selected,
  info,
}: CreditCardProps) => {
  const formatExpirationPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  return !showPreviewCardBack ? (
    <CreditCardFront
      creditCardNumber={[
        cardNumber.firstValue,
        cardNumber.secondValue,
        cardNumber.thirdValue,
        cardNumber.fourthValue,
      ]}
      expirationPeriod={formatExpirationPeriod()}
      ownerName={owner.name}
      selectedCard={selected}
    />
  ) : (
    <CreditCardBack cvcNumber={info.cvc} /> // cvcNumber props 전달
  );
};

export default CreditCard;
