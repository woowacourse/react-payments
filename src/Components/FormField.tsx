/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import FormInput from "./FormInput";
import Tooltip from "./Tooltip";

import { css } from "@emotion/react";
import { CardInfoContext, FormErrorContext } from "../App";
import { isValidCardNumbers, isValidOwnerName, isValidPeriod } from "../validators";

const titleCss = css({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
  textAlign: "left",
});

const descriptionCss = css({
  fontSize: "10px",
  fontWeight: "400",
  lineHeight: "14px",
  textAlign: "left",
  color: "#8B95A1",
  marginBottom: "30px",
});

const rowStyle = css({
  display: "flex",
  justifyContent: "space-between",
});

interface Props {
  formFieldInfo: FormFieldInfo;
  children: React.ReactNode;
}

const FormFieldComponent: React.FC<Props> = ({ formFieldInfo: { key, title, description, label }, children }) => {
  const formErrors = useContext(FormErrorContext)![0];
  return (
    <div>
      <h1 css={titleCss}>{title}</h1>
      <p css={descriptionCss}>{description}</p>
      <label htmlFor="id">{label}</label>
      <div css={rowStyle}>{children}</div>
      <Tooltip>{formErrors[key].errorMessage ?? ""}</Tooltip>
    </div>
  );
};

const CardNumberField = () => {
  const cardInfoStateHook = useContext(CardInfoContext);
  const setCardInfo = cardInfoStateHook![1];
  const formErrorStateHook = useContext(FormErrorContext);
  const setFormErrors = formErrorStateHook![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputs = e.target.parentNode!.childNodes as unknown;
    const inputValues = Array.from(inputs as HTMLInputElement[]).map((input) => input.value);
    const numbersList = inputValues.map((value) => value.split("").map(Number));
    if (isValidCardNumbers(numbersList)) {
      setCardInfo((prev) => ({
        ...prev,
        cardNumbers: {
          firstNumbers: numbersList[0],
          secondNumbers: numbersList[1],
          thirdNumbers: numbersList[2],
          fourthNumbers: numbersList[3],
        },
      }));
      setFormErrors((prev) => ({ ...prev, cardNumbers: { isError: false, errorMessage: "" } }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        cardNumbers: { isError: true, errorMessage: "카드번호에 잘못된 입력이 있습니다." },
      }));
    }
  };

  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardNumbers",
        title: "결제할 카드 번호를 입력해 주세요",
        description: "본인 명의의 카드만 결제 가능합니다.",
        label: "카드 번호",
      }}
    >
      {Array.from({ length: 4 }, () => (
        <FormInput id={`id-0`} onChange={(e) => onInputChange(e)} sizePreset="small" placeholder="1234" maxLength={4} />
      ))}
    </FormFieldComponent>
  );
};

const CardValidityPeriodField = () => {
  const cardInfoStateHook = useContext(CardInfoContext);
  const setCardInfo = cardInfoStateHook![1];
  const formErrorStateHook = useContext(FormErrorContext);
  const setFormErrors = formErrorStateHook![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputs = e.target.parentNode!.childNodes as unknown;
    const inputValues = Array.from(inputs as HTMLInputElement[]).map((input) => input.value);
    const [month, year] = inputValues.map((value) => Number(value));
    if (isValidPeriod({ month, year })) {
      setCardInfo((prev) => ({
        ...prev,
        cardValidityPeriod: {
          month,
          year,
        },
      }));
      setFormErrors((prev) => ({ ...prev, cardValidityPeriod: { isError: false, errorMessage: "" } }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        cardValidityPeriod: { isError: true, errorMessage: "유효기간에 잘못된 입력이 있습니다." },
      }));
    }
  };

  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardValidityPeriod",
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
    >
      {[
        { name: "month", placeholder: "MM" },
        { name: "year", placeholder: "YY" },
      ].map((props) => (
        <FormInput
          id={`id-period-${props.name}`}
          onChange={(e) => onInputChange(e)}
          sizePreset="medium"
          maxLength={2}
          {...props}
        />
      ))}
    </FormFieldComponent>
  );
};

const CardOwnerField = () => {
  const cardInfoStateHook = useContext(CardInfoContext);
  const setCardInfo = cardInfoStateHook![1];
  const formErrorStateHook = useContext(FormErrorContext);
  const setFormErrors = formErrorStateHook![1];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidOwnerName(e.target.value) || e.target.value === "") {
      setCardInfo((prev) => ({
        ...prev,
        ownerName: e.target.value.toUpperCase(),
      }));
      setFormErrors((prev) => ({
        ...prev,
        ownerName: { isError: false, errorMessage: "" },
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        ownerName: { isError: true, errorMessage: "카드 소유자 이름은 영어만 입력 가능합니다." },
      }));
    }
  };
  return (
    <FormFieldComponent
      formFieldInfo={{
        key: "cardValidityPeriod",
        title: "카드 유효기간을 입력해 주세요",
        description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
        label: "유효기간",
      }}
    >
      {[{ name: "ownerName", placeholder: "PARK JEONG-WOO" }].map((props) => (
        <FormInput
          id={`id-owner-${props.name}`}
          onChange={(e) => onInputChange(e)}
          sizePreset="large"
          maxLength={15}
          {...props}
        />
      ))}
    </FormFieldComponent>
  );
};

const FormField = {
  CardNumberField,
  CardValidityPeriodField,
  CardOwnerField,
};

export default FormField;
