/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { CardNumbersContext, CardOwnerInfoContext, CardValidityPeriodContext } from "../../App";
import { CardNumberErrorContext, CardOwnerInfoErrorContext, CardValidityPeriodErrorContext } from "../Form";
import { inputStyle } from "./emotionCss";
import { cardNumbersValidator, cardOwnerValidator, cardPeriodValidator } from "./validator";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: CardInfoInputKey;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name: CardInfoInputKey) => void;
  isError?: boolean;
}

const FormInputCompound: React.FC<InputProps> = ({ sizePreset = "medium", name, isError, onInputChange, ...props }) => {
  return <input {...props} css={inputStyle(sizePreset, isError)} onChange={(e) => onInputChange(e, name)} />;
};

const CardNumberInput = () => {
  const [cardNumbers, setNumbers] = useContext(CardNumbersContext)!;
  const [cardNumberError, setCardNumberError] = useContext(CardNumberErrorContext)!;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardNumbers) => {
    const { isValid, value, message: errorMessage } = cardNumbersValidator(e.target.value);
    if (isValid) {
      setNumbers((prev: CardNumbers) => {
        const temp = { ...prev };
        temp[name] = value;
        return temp;
      });
      setCardNumberError((prev: CardNumbersError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: false, errorMessage: "" };
        return errors;
      });
    } else {
      setCardNumberError((prev: CardNumbersError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: true, errorMessage };
        return errors;
      });
    }
  };

  return (
    <>
      {[{ name: "firstNumbers" }, { name: "secondNumbers" }, { name: "thirdNumbers" }, { name: "fourthNumbers" }].map(
        ({ name }, index) => (
          <FormInputCompound
            id={`id-${name}`}
            key={index}
            onInputChange={(e, name) => onInputChange(e, name as keyof CardNumbers)}
            isError={!!cardNumberError[name as keyof CardNumbersError]?.isError}
            sizePreset="small"
            placeholder="1234"
            maxLength={4}
            name={name as keyof CardNumbers}
            value={cardNumbers[name as keyof CardNumbers] || ""}
          />
        )
      )}
    </>
  );
};

const CardPeriodInput = () => {
  const [cardPeriod, setCardPeriod] = useContext(CardValidityPeriodContext)!;
  const [periodError, setPeriodError] = useContext(CardValidityPeriodErrorContext)!;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardValidityPeriod) => {
    const { isValid, value, message: errorMessage } = cardPeriodValidator(e.target.value, name);
    if (isValid) {
      setCardPeriod((prev: CardValidityPeriod) => {
        const temp = { ...prev };
        temp[name] = value;
        return temp;
      });
      setPeriodError((prev: CardValidityPeriodError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: false, errorMessage: "" };
        return errors;
      });
    } else {
      setPeriodError((prev: CardValidityPeriodError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: true, errorMessage };
        return errors;
      });
    }
  };

  return (
    <>
      {[
        { name: "month", placeholder: "MM" },
        { name: "year", placeholder: "YY" },
      ].map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-period-${name}`}
          key={index}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardValidityPeriod)}
          isError={!!periodError[name as keyof CardValidityPeriodError]?.isError}
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardPeriod[name as keyof CardValidityPeriod] ?? ""}
        />
      ))}
    </>
  );
};

const CardOwnerInput = () => {
  const [cardOwner, setCardOwner] = useContext(CardOwnerInfoContext)!;
  const [ownerError, setOwnerError] = useContext(CardOwnerInfoErrorContext)!;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardOwnerInfo) => {
    const { isValid, value, message: errorMessage } = cardOwnerValidator(e.target.value);
    if (isValid) {
      setCardOwner((prev: CardOwnerInfo) => {
        const temp = { ...prev };
        temp[name] = value;
        return temp;
      });
      setOwnerError((prev: CardOwnerInfoError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: false, errorMessage: "" };
        return errors;
      });
    } else {
      setOwnerError((prev: CardOwnerInfoError) => {
        const errors = JSON.parse(JSON.stringify(prev));
        errors[name] = { isError: true, errorMessage };
        return errors;
      });
    }
  };

  return (
    <>
      {[{ name: "name", placeholder: "PARK JEONG-WOO" }].map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardOwnerInfo)}
          isError={!!ownerError[name as keyof CardOwnerInfoError]?.isError}
          sizePreset="large"
          maxLength={15}
          name={name as keyof CardOwnerInfo}
          value={cardOwner[name as keyof CardOwnerInfo] || ""}
          placeholder={placeholder}
        />
      ))}
    </>
  );
};

const FormInput = {
  CardNumberInput,
  CardPeriodInput,
  CardOwnerInput,
};

export default FormInput;
