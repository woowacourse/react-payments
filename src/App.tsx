/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import "./App.css";
import CreditCard from "./Components/CreditCard/CreditCard";
import Form from "./Components/Form/Form";
import {
  isValidCardNumbers,
  isValidOwnerName,
  isValidPeriod,
} from "./validators";

const initData: InitCardInfoType[] = [
  {
    key: "cardNumbers",
    initValue: {
      firstNumbers: [],
      secondNumbers: [],
      thirdNumbers: [],
      fourthNumbers: [],
    },
  },
  {
    key: "cardValidityPeriod",
    initValue: {
      month: undefined,
      year: undefined,
    },
  },
  {
    key: "ownerName",
    initValue: "",
  },
];

const mainStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "376px",
  margin: "auto",
});

function App() {
  const createCardInfo = (formFields: InitCardInfoType[]): CardInfo => {
    return formFields.reduce((object, props) => {
      const { key, initValue } = props;
      object[key] = initValue;
      return object;
    }, {} as CardInfo);
  };

  const createFormErrors = (formFields: InitCardInfoType[]): ErrorState => {
    return formFields.reduce((object, props) => {
      object[props.key] = {
        errorMessage: "",
        isError: false,
      };
      return object;
    }, {} as ErrorState);
  };

  const [cardInfo, setCardInfo] = useState(createCardInfo(initData));
  const [formErrors, setFormErrors] = useState(createFormErrors(initData));

  const formFieldPropsList: FormFieldInfo[] = [
    {
      key: "cardNumbers",
      title: "결제할 카드 번호를 입력해 주세요",
      description: "본인 명의의 카드만 결제 가능합니다.",
      label: "카드 번호",
      sizePreset: "small",
      inputInfoList: [
        {
          name: "firstNumbers",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const numbersList = inputValues.map((value) =>
              value.split("").map(Number)
            );
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
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: {
                  isError: true,
                  errorMessage: "카드번호에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
        {
          name: "secondNumbers",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const numbersList = inputValues.map((value) =>
              value.split("").map(Number)
            );
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
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: {
                  isError: true,
                  errorMessage: "카드번호에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
        {
          name: "thirdNumbers",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const numbersList = inputValues.map((value) =>
              value.split("").map(Number)
            );
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
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: {
                  isError: true,
                  errorMessage: "카드번호에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
        {
          name: "fourthNumbers",
          placeholder: "1234",
          maxLength: 4,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const numbersList = inputValues.map((value) =>
              value.split("").map(Number)
            );
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
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardNumbers: {
                  isError: true,
                  errorMessage: "카드번호에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
      ],
    },
    {
      key: "cardValidityPeriod",
      title: "카드 유효기간을 입력해 주세요",
      description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
      label: "유효기간",
      sizePreset: "medium",
      inputInfoList: [
        {
          name: "validityMonth",
          placeholder: "MM",
          maxLength: 2,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const [month, year] = inputValues.map((value) => Number(value));
            if (isValidPeriod({ month, year })) {
              setCardInfo((prev) => ({
                ...prev,
                cardValidityPeriod: {
                  month,
                  year,
                },
              }));
              setFormErrors((prev) => ({
                ...prev,
                cardValidityPeriod: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardValidityPeriod: {
                  isError: true,
                  errorMessage: "유효기간에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
        {
          name: "validityYear",
          placeholder: "YY",
          maxLength: 2,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputs = e.target.parentNode!.querySelectorAll("input");
            const inputValues = Array.from(inputs).map((input) => input.value);
            const [month, year] = inputValues.map((value) => Number(value));
            if (isValidPeriod({ month, year })) {
              setCardInfo((prev) => ({
                ...prev,
                cardValidityPeriod: {
                  month,
                  year,
                },
              }));
              setFormErrors((prev) => ({
                ...prev,
                cardValidityPeriod: { isError: false, errorMessage: "" },
              }));
            } else {
              setFormErrors((prev) => ({
                ...prev,
                cardValidityPeriod: {
                  isError: true,
                  errorMessage: "유효기간에 잘못된 입력이 있습니다.",
                },
              }));
            }
          },
        },
      ],
    },
    {
      key: "ownerName",
      title: "카드 소유자 이름을 입력해 주세요",
      label: "소유자 이름",
      sizePreset: "large",
      inputInfoList: [
        {
          name: "ownerName",
          placeholder: "PARK JEONG-WOO",
          maxLength: 18,
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
                ownerName: {
                  isError: true,
                  errorMessage: "카드 소유자 이름은 영어만 입력 가능합니다.",
                },
              }));
            }
          },
        },
      ],
    },
  ];

  return (
    <div css={mainStyle}>
      <CreditCard cardInfo={cardInfo} />
      <Form formFiledPropsList={formFieldPropsList} formErrors={formErrors} />
    </div>
  );
}

export default App;
