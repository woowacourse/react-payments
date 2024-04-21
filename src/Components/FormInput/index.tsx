/** @jsxImportSource @emotion/react */
import React, { useContext } from "react";
import { CardNumbersContext, CardOwnerInfoContext, CardValidityPeriodContext } from "../../App";
import { CardNumberErrorContext, CardOwnerInfoErrorContext, CardValidityPeriodErrorContext } from "../Form";
import { inputStyle } from "./emotionCSS";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: CardInfoInputKey;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name: CardInfoInputKey) => void;
}

const FormInputCompound: React.FC<InputProps> = ({ sizePreset = "medium", name, onInputChange, ...props }) => {
  return <input {...props} css={inputStyle(sizePreset)} onChange={(e) => onInputChange(e, name)} />;
};

const CardNumberInput = () => {
  const [cardNumbers, setNumbers] = useContext(CardNumbersContext)!;
  // const setFormErrors = useContext(CardNumberErrorContext)![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardNumbers) => {
    const inputNumber = Number(e.target.value);
    //TODO: valid 추가하기
    setNumbers((prev: CardNumbers) => {
      const numbers = { ...prev };
      numbers[name] = inputNumber;
      return numbers;
    });
  };

  return (
    <>
      {[{ name: "firstNumbers" }, { name: "secondNumbers" }, { name: "thirdNumbers" }, { name: "fourthNumbers" }].map(
        ({ name }, index) => (
          <FormInputCompound
            id={`id-${name}`}
            key={index}
            onInputChange={(e, name) => onInputChange(e, name as keyof CardNumbers)}
            sizePreset="small"
            placeholder="1234"
            maxLength={4}
            name={name as keyof CardNumbers}
            value={cardNumbers[name as keyof CardNumbers]}
          />
        )
      )}
    </>
  );
};

const CardPeriodInput = () => {
  const [cardPeriod, setCardPeriod] = useContext(CardValidityPeriodContext)!;
  // const setPeriodError = useContext(CardValidityPeriodErrorContext)![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardValidityPeriod) => {
    const inputNumber = Number(e.target.value);
    //TODO: valid 추가하기
    setCardPeriod((prev: CardValidityPeriod) => {
      const period = { ...prev };
      period[name] = inputNumber;
      return period;
    });
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
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardPeriod[name as keyof CardValidityPeriod]}
        />
      ))}
    </>
  );
};

const CardOwnerInput = () => {
  const [cardOwner, setCardOwner] = useContext(CardOwnerInfoContext)!;
  // const setFormErrors = useContext(CardOwnerInfoErrorContext)![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardOwnerInfo) => {
    const input = e.target.value;
    //TODO: valid 추가하기
    setCardOwner((prev: CardOwnerInfo) => {
      const ownerInfo = { ...prev };
      ownerInfo[name] = input;
      return ownerInfo;
    });
  };
  return (
    <>
      {[{ name: "name", placeholder: "PARK JEONG-WOO" }].map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardOwnerInfo)}
          sizePreset="large"
          maxLength={15}
          name={name as keyof CardOwnerInfo}
          value={cardOwner[name as keyof CardOwnerInfo] ?? ""}
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
