/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { CardInfoContext, FormErrorContext } from "../App";
import { isValidCardNumbers, isValidOwnerName, isValidPeriod } from "../validators";

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
  const [cardInfo, setCardInfo] = useContext(CardInfoContext)!;
  const setFormErrors = useContext(FormErrorContext)![1];
  const CATEGORY = "cardNumbers";
  const cardInfoDetail = cardInfo[CATEGORY] as CardNumbers;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardNumbers) => {
    const numbers = Number(e.target.value);
    if (isValidCardNumbers(numbers)) {
      setCardInfo((prev: CardInfo) => {
        const tempCardInfoDetail = prev[CATEGORY] as CardNumbers;
        tempCardInfoDetail[name] = numbers;
        return prev;
      });
      // setFormErrors((prev) => ({ ...prev, cardNumbers: { isError: false, errorMessage: "" } }));
    } else {
      // setFormErrors((prev) => ({
      //   ...prev,
      //   cardNumbers: { isError: true, errorMessage: "카드번호에 잘못된 입력이 있습니다." },
      // }));
    }
  };

  return (
    <>
      {[{ name: "firstNumbers" }, { name: "secondNumbers" }, { name: "thirdNumbers" }, { name: "fourthNumbers" }].map(
        ({ name }) => (
          <FormInputCompound
            id={`id-${name}`}
            onInputChange={(e, name) => onInputChange(e, name as keyof CardNumbers)}
            sizePreset="small"
            placeholder="1234"
            maxLength={4}
            name={name as keyof CardNumbers}
            value={cardInfoDetail[name as keyof CardNumbers]}
          />
        )
      )}
    </>
  );
};

const CardPeriodInput = () => {
  const [cardInfo, setCardInfo] = useContext(CardInfoContext)!;
  const setFormErrors = useContext(FormErrorContext)![1];
  const CATEGORY = "cardValidityPeriod";
  const cardInfoDetail = cardInfo[CATEGORY] as CardValidityPeriod;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardValidityPeriod) => {
    const inputNumber = Number(e.target.value);
    if (isValidPeriod(inputNumber, name)) {
      setCardInfo((prev: CardInfo) => {
        const tempCardInfoDetail = prev[CATEGORY] as CardValidityPeriod;
        tempCardInfoDetail[name] = inputNumber;
        return prev;
      });
      // setFormErrors((prev) => ({ ...prev, cardValidityPeriod: { isError: false, errorMessage: "" } }));
    } else {
      // setFormErrors((prev) => ({
      //   ...prev,
      //   cardValidityPeriod: { isError: true, errorMessage: "유효기간에 잘못된 입력이 있습니다." },
      // }));
    }
  };
  return (
    <>
      {[
        { name: "month", placeholder: "MM" },
        { name: "year", placeholder: "YY" },
      ].map(({ name, placeholder }) => (
        <FormInputCompound
          id={`id-period-${name}`}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardValidityPeriod)}
          sizePreset="medium"
          maxLength={2}
          name={name as keyof CardValidityPeriod}
          placeholder={placeholder}
          value={cardInfoDetail[name as keyof CardValidityPeriod]}
        />
      ))}
    </>
  );
};

const CardOwnerInput = () => {
  const [cardInfo, setCardInfo] = useContext(CardInfoContext)!;
  const setFormErrors = useContext(FormErrorContext)![1];
  const CATEGORY = "cardOwnerInfo";
  const cardInfoDetail = cardInfo[CATEGORY] as CardOwnerInfo;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof CardOwnerInfo) => {
    const ownerName = e.target.value.toUpperCase();
    if (isValidOwnerName(e.target.value) || e.target.value === "") {
      setCardInfo((prev: CardInfo) => {
        const tempCardInfoDetail = prev[CATEGORY] as CardOwnerInfo;
        tempCardInfoDetail[name] = ownerName;
        return prev;
      });
    } else {
      // setFormErrors((prev) => ({
      //   ...prev,
      //   ownerName: { isError: true, errorMessage: "카드 소유자 이름은 영어만 입력 가능합니다." },
      // }));
    }
  };
  return (
    <>
      {[{ name: "ownerName", placeholder: "PARK JEONG-WOO" }].map(({ name, placeholder }) => (
        <FormInputCompound
          id={`id-owner-${name}`}
          onInputChange={(e, name) => onInputChange(e, name as keyof CardOwnerInfo)}
          sizePreset="large"
          maxLength={15}
          name={name as keyof CardOwnerInfo}
          value={cardInfoDetail[name as keyof CardOwnerInfo]}
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
