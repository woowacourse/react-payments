/** @jsxImportSource @emotion/react */
import React, { SetStateAction, memo } from "react";
import { inputStyle } from "./style";
import { ValidatorType, cardNumbersValidator, cardOwnerValidator, cardPeriodValidator } from "./validator";
import {
  CardNumbersContext,
  CardOwnerInfoContext,
  CardValidityPeriodContext,
} from "../../routes/Payments/CardInfoContextProvider";
import {
  CardNumberErrorContext,
  CardOwnerInfoErrorContext,
  CardValidityPeriodErrorContext,
} from "../Form/ErrorContextProvider";
import useContextWrapper from "../../hooks/useContextWrapper";

interface InputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name?: keyof T) => void;
  isError?: boolean;
}

function FormInputCompound<T>({ sizePreset = "medium", name, isError, onInputChange, ...props }: InputProps<T>) {
  return <input {...props} css={inputStyle(sizePreset, isError)} onChange={(e) => onInputChange(e, name as keyof T)} />;
}

interface ChangeProps<T, U, V> {
  name: keyof T;
  setData: React.Dispatch<SetStateAction<T>>;
  setError: React.Dispatch<SetStateAction<U>>;
  validator: ValidatorType<V>;
}

const onInputChange = <T, U, V>(
  e: React.ChangeEvent<HTMLInputElement>,
  { name, setData, setError, validator }: ChangeProps<T, U, V>
) => {
  const {
    isValid,
    value,
    message: errorMessage,
  } = validator(e.target.value, name === "month" || name === "year" ? name : undefined);

  if (isValid && name) {
    setData((prev: T) => {
      const temp = { ...prev };
      temp[name] = value as T[keyof T];
      return temp;
    });
    setError((prev: U) => {
      const errors = JSON.parse(JSON.stringify(prev));
      errors[name] = { isError: false, errorMessage: "" };
      return errors;
    });
  } else {
    setError((prev: U) => {
      const errors = JSON.parse(JSON.stringify(prev));
      errors[name] = { isError: true, errorMessage };
      return errors;
    });
  }
};

const CardNumberInput = () => {
  const [cardNumbers, setData] = useContextWrapper(CardNumbersContext);
  const [cardNumberError, setError] = useContextWrapper(CardNumberErrorContext);

  type InputInfoList = { name: keyof CardNumbers };

  const InputInfoList: InputInfoList[] = [
    { name: "firstNumbers" },
    { name: "secondNumbers" },
    { name: "thirdNumbers" },
    { name: "fourthNumbers" },
  ];

  return (
    <>
      {InputInfoList.map(({ name }, index) => (
        <FormInputCompound<CardNumbers>
          id={`id-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardNumbers, CardNumbersError, string>(e, {
              name: name,
              setData,
              setError,
              validator: cardNumbersValidator,
            })
          }
          isError={!!cardNumberError[name as keyof CardNumbersError]?.isError}
          sizePreset="small"
          placeholder="1234"
          maxLength={4}
          name={name}
          value={cardNumbers[name] ?? ""}
        />
      ))}
    </>
  );
};

const CardPeriodInput = () => {
  const [cardPeriod, setData] = useContextWrapper(CardValidityPeriodContext);
  const [periodError, setError] = useContextWrapper(CardValidityPeriodErrorContext);

  type InputInfoList = { name: keyof CardValidityPeriod; placeholder: string };

  const InputInfoList: InputInfoList[] = [
    { name: "month", placeholder: "MM" },
    { name: "year", placeholder: "YY" },
  ];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-period-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardValidityPeriod, CardValidityPeriodError, number>(e, {
              name,
              setData,
              setError,
              validator: cardPeriodValidator,
            })
          }
          isError={!!periodError[name]?.isError}
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardPeriod[name] ?? ""}
        />
      ))}
    </>
  );
};

const CardOwnerInput = () => {
  const [cardOwner, setData] = useContextWrapper(CardOwnerInfoContext);
  const [ownerError, setError] = useContextWrapper(CardOwnerInfoErrorContext);

  type InputInfoList = { name: keyof CardOwnerInfo; placeholder: string };

  const InputInfoList: InputInfoList[] = [{ name: "name", placeholder: "PARK JEONG-WOO" }];

  return (
    <>
      {InputInfoList.map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          onInputChange={(e) =>
            onInputChange<CardOwnerInfo, CardOwnerInfoError, string>(e, {
              name,
              setData,
              setError,
              validator: cardOwnerValidator,
            })
          }
          isError={!!ownerError[name]?.isError}
          sizePreset="large"
          maxLength={15}
          name={name}
          value={cardOwner[name] ?? ""}
          placeholder={placeholder}
        />
      ))}
    </>
  );
};

const FormInput = {
  CardNumberInput: memo(CardNumberInput),
  CardPeriodInput: memo(CardPeriodInput),
  CardOwnerInput: memo(CardOwnerInput),
};

export default FormInput;
