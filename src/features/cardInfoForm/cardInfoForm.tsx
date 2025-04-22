import {
  CardNumberPosition,
  ExpirationPeriod,
} from "../../\btypes/index.types";
import CardNumberSection from "../cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "../cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "../cardCVCNumberSection/CardCVCNumberSection";
import useError from "../../shared/hook/useError";
import { NO_ERROR } from "../../shared/constants/constant";
import { getCardNumberValidationFns } from "../../entities/cardNumberInputs/CardNumberInputs.domain";
import {
  getMonthValidationFns,
  getYearValidationFns,
} from "../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs.domain";
import { getCVCValidationFns } from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs.domain";

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
};

export default function CardInfoForm({
  cardNumber,
  changeCardNumber,
  expirationPeriod,
  changeExpirationPeriod,
  CVCNumber,
  changeCVCNumber,
}: CardInfoFormProps) {
  const {
    error: cardNumberError,
    checkValidation: checkCardNumberValidation,
    getErrorMessage: getCardNumberErrorMessage,
  } = useError<Record<CardNumberPosition, string>>(
    {
      first: NO_ERROR,
      second: NO_ERROR,
      third: NO_ERROR,
      fourth: NO_ERROR,
    },
    getCardNumberValidationFns
  );

  const {
    error: monthError,
    checkValidation: checkMonthValidation,
    getErrorMessage: getMonthErrorMessage,
  } = useError<Record<"month", string>>(
    {
      month: NO_ERROR,
    },
    getMonthValidationFns
  );

  const {
    error: yearError,
    checkValidation: checkYearValidation,
    getErrorMessage: getYearErrorMessage,
  } = useError<Record<"year", string>>(
    {
      year: NO_ERROR,
    },
    getYearValidationFns
  );

  const {
    error: CVCError,
    checkValidation: checkCVCValidation,
    getErrorMessage: getCVCErrorMessage,
  } = useError<Record<"CVCNumber", string>>(
    {
      CVCNumber: NO_ERROR,
    },
    getCVCValidationFns
  );

  return (
    <>
      <CardNumberSection
        cardNumber={cardNumber}
        changeCardNumber={changeCardNumber}
        error={cardNumberError}
        checkValidation={checkCardNumberValidation}
        getErrorMessage={getCardNumberErrorMessage}
      />
      <CardExpirationPeriodSection
        expirationPeriod={expirationPeriod}
        changeExpirationPeriod={changeExpirationPeriod}
        monthError={monthError}
        checkMonthValidation={checkMonthValidation}
        getMonthErrorMessage={getMonthErrorMessage}
        yearError={yearError}
        checkYearValidation={checkYearValidation}
        getYearErrorMessage={getYearErrorMessage}
      />
      <CardCVCNumberSection
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
        error={CVCError}
        checkValidation={checkCVCValidation}
        getErrorMessage={getCVCErrorMessage}
      />
    </>
  );
}
