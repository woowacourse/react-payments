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
import CardSubmitButton from "../cardSubmitButton/CardSubmitButton";
import { useState } from "react";

type CardInfoFormProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
  expirationPeriod: {
    values: Record<ExpirationPeriod, string>;
    changeValues: (expirationPeriod: ExpirationPeriod, date: string) => void;
  };
  CVCNumber: {
    values: { CVCNumber: string };
    changeValues: (type: "CVCNumber", CVCNumber: string) => void;
  };
  password: {
    values: { password: string };
    changeValues: (type: "password", password: string) => void;
  };
  cardType: {
    values: { cardType: string };
    changeValues: (type: "cardType", cardType: string) => void;
  };
};

export default function CardInfoForm({
  cardNumber,
  changeCardNumber,
  expirationPeriod,
  CVCNumber,
  password,
  cardType,
}: CardInfoFormProps) {
  const [step, setStep] = useState(5);
  const nextStep = () => setStep((prev) => prev + 1);

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
      {step >= 4 && <CardPasswordSection password={password} />}
      {step >= 3 && (
        <CardCVCNumberSection CVCNumber={CVCNumber} CVCError={CVCError} />
      )}
      {step >= 2 && (
        <CardExpirationPeriodSection
          expirationPeriod={expirationPeriod}
          monthError={month}
          yearError={year}
        />
      )}
      {step >= 1 && <CardTypeSection cardType={cardType} />}
      {step >= 0 && (
        <CardNumberSection
          cardNumber={cardNumber}
          changeCardNumber={changeCardNumber}
          cardNumberError={cardNumberError}
        />
      )}
      <CardSubmitButton />
    </>
  );
}

// step을 바꾸는 조건
/*
1. 해당 섹션의 input에 모든 값이 채워져 있다.
2. 해당 섹션에 에러가 없다.
*/
