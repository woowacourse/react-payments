/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { CardNumbersContext, CardOwnerInfoContext, CardValidityPeriodContext } from "../App";
import { CardNumberErrorContext, CardOwnerInfoErrorContext, CardValidityPeriodErrorContext } from "./Form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizePreset?: SizePresetType;
  name: CardInfoInputKey;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, name: CardInfoInputKey) => void;
}

const SIZE: Record<NonNullable<InputProps["sizePreset"]>, "17%" | "43%" | "100%"> = {
  small: "17%",
  medium: "43%",
  large: "100%",
};

const FormInputCompound: React.FC<InputProps> = ({ sizePreset = "medium", name, onInputChange, ...props }) => {
  const inputStyle = css({
    height: "25px",
    borderRadius: "2px",
    border: "solid 1px #ACACAC",
    padding: "8px",
    width: SIZE[sizePreset],
    marginTop: "10px",
    textTransform: "uppercase",
  });

  return <input {...props} css={inputStyle} onChange={(e) => onInputChange(e, name)} />;
};

const CardNumberInput = () => {
  const [cardNumbers, setNumbers] = useContext(CardNumbersContext)!;
  // const setFormErrors = useContext(CardNumberErrorContext)![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardNumbers) => {
    console.log(`${name}에 입력되었습니다.`);
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
    console.log(`${name}에 입력되었습니다.`);
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
    console.log(`${name}이 입력되었습니다.`);
  };
  return (
    <>
      {[{ name: "ownerName", placeholder: "PARK JEONG-WOO" }].map(({ name, placeholder }, index) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          key={index}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardOwnerInfo)}
          sizePreset="large"
          maxLength={15}
          name={name as keyof CardOwnerInfo}
          value={cardOwner[name as keyof CardOwnerInfo]}
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
