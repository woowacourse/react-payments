/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import "./App.css";
import CreditCard from "./Components/CreditCard";
import Form from "./Components/Form";

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

export const CardInfoContext = createContext<[CardInfo, Dispatch<SetStateAction<CardInfo>>] | null>(null);
export const FormErrorContext = createContext<[ErrorState, Dispatch<SetStateAction<ErrorState>>] | null>(null);

function App() {
  const cardInfoStateHook = useState(createCardInfo(initData));
  const formErrorStateHook = useState(createFormErrors(initData));

  return (
    <div css={mainStyle}>
      <CardInfoContext.Provider value={cardInfoStateHook}>
        <CreditCard />
        <FormErrorContext.Provider value={formErrorStateHook}>
          <Form />
        </FormErrorContext.Provider>
      </CardInfoContext.Provider>
    </div>
  );
}

export default App;
