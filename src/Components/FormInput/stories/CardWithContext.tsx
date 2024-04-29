import {
  CardNumbersContext,
  CardOwnerInfoContext,
  CardValidityPeriodContext,
} from "../../../routes/Payments/CardInfoContextProvider";
import { useState } from "react";
import {
  CardNumberErrorContext,
  CardOwnerInfoErrorContext,
  CardValidityPeriodErrorContext,
} from "../../../routes/Payments/FormContextProvider";

import CardNumberInput from "../CardNumberInput";
import CardPeriodInput from "../CardPeriodInput";
import CardOwnerInput from "../CardOwnerInput";

interface Props {
  children: React.ReactNode;
  cardNumbersValue: CardNumbers;
  cardPeriodValue: CardValidityPeriod;
  cardOwnerValue: CardOwnerInfo;
  cardNumbersError: CardNumbersError;
  cardPeriodError: CardValidityPeriodError;
  cardOwnerError: CardOwnerInfoError;
}

const CardWithContextCompound: React.FC<Props> = ({
  children,
  cardNumbersValue,
  cardPeriodValue,
  cardOwnerValue,
  cardNumbersError,
  cardPeriodError,
  cardOwnerError,
}) => {
  return (
    <CardNumbersContext.Provider value={useState(cardNumbersValue)}>
      <CardValidityPeriodContext.Provider value={useState(cardPeriodValue)}>
        <CardOwnerInfoContext.Provider value={useState(cardOwnerValue)}>
          <CardNumberErrorContext.Provider value={useState(cardNumbersError)}>
            <CardValidityPeriodErrorContext.Provider value={useState(cardPeriodError)}>
              <CardOwnerInfoErrorContext.Provider value={useState(cardOwnerError)}>
                {children}
              </CardOwnerInfoErrorContext.Provider>
            </CardValidityPeriodErrorContext.Provider>
          </CardNumberErrorContext.Provider>
        </CardOwnerInfoContext.Provider>
      </CardValidityPeriodContext.Provider>
    </CardNumbersContext.Provider>
  );
};

const CardWithContext: Record<"CardNumberInput" | "CardPeriodInput" | "CardOwnerInput", React.FC<Props>> = {
  CardNumberInput: (props) => (
    <CardWithContextCompound {...props}>
      <CardNumberInput />
    </CardWithContextCompound>
  ),
  CardPeriodInput: (props) => (
    <CardWithContextCompound {...props}>
      <CardPeriodInput />
    </CardWithContextCompound>
  ),
  CardOwnerInput: (props) => (
    <CardWithContextCompound {...props}>
      <CardOwnerInput />
    </CardWithContextCompound>
  ),
};

export default CardWithContext;
