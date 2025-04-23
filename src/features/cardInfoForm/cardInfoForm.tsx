import {
  CardNumberPosition,
  ExpirationPeriod,
} from "../../\btypes/index.types";
import CardNumberSection from "../cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "../cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "../cardCVCNumberSection/CardCVCNumberSection";
import useError from "./hooks/useError";
import { NO_ERROR } from "../../shared/constants/constant";
import { getCardNumberValidationFns } from "../../entities/cardNumberInputs/CardNumberInputs.domain";
import {
  getMonthValidationFns,
  getYearValidationFns,
} from "../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs.domain";
import { getCVCValidationFns } from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs.domain";
import CardTypeSection from "../cardTypeSection/CardTypeSection";
import CardPasswordSection from "../cardPasswordSection/CardPasswordSection";

type CardInfoFormProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
  expirationPeriod: Record<ExpirationPeriod, string>;
  changeExpirationPeriod: (
    expirationPeriod: ExpirationPeriod,
    date: string
  ) => void;
  CVCNumber: string;
  changeCVCNumber: (type: "CVCNumber", CVCNumber: string) => void;
  password: {
    values: { password: string };
    changeValues: (type: "password", password: string) => void;
  };
};

export default function CardInfoForm({
  cardNumber,
  changeCardNumber,
  expirationPeriod,
  changeExpirationPeriod,
  CVCNumber,
  changeCVCNumber,
  password,
}: CardInfoFormProps) {
  const cardNumberError = useError<Record<CardNumberPosition, string>>(
    {
      first: NO_ERROR,
      second: NO_ERROR,
      third: NO_ERROR,
      fourth: NO_ERROR,
    },
    getCardNumberValidationFns
  );

  const month = useError<Record<"month", string>>(
    {
      month: NO_ERROR,
    },
    getMonthValidationFns
  );

  const year = useError<Record<"year", string>>(
    {
      year: NO_ERROR,
    },
    getYearValidationFns
  );

  const CVCError = useError<Record<"CVCNumber", string>>(
    {
      CVCNumber: NO_ERROR,
    },
    getCVCValidationFns
  );

  return (
    <>
      <CardPasswordSection password={password} />
      <CardTypeSection />
      <CardNumberSection
        cardNumber={cardNumber}
        changeCardNumber={changeCardNumber}
        cardNumberError={cardNumberError}
      />
      <CardExpirationPeriodSection
        expirationPeriod={expirationPeriod}
        changeExpirationPeriod={changeExpirationPeriod}
        monthError={month}
        yearError={year}
      />
      <CardCVCNumberSection
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
        CVCError={CVCError}
      />
    </>
  );
}
