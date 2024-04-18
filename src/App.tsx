import { useState } from "react";
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
  console.log(cardInfo);
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
          onInputChange: () => {
            console.log("첫번째 카드숫자가 바뀜!");
            // setCardInfo
            // setFormErrors
          },
        },
        {
          name: "secondNumbers",
          placeholder: "1234",
          onInputChange: () => {
            console.log("두번째 카드숫자가 바뀜!");
          },
        },
        {
          name: "thirdNumbers",
          placeholder: "1234",
          onInputChange: () => {
            console.log("세번째 카드숫자가 바뀜!");
          },
        },
        {
          name: "fourthNumbers",
          placeholder: "1234",
          onInputChange: () => {
            console.log("네번째 카드숫자가 바뀜!");
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
          onInputChange: () => {
            console.log("카드 유효기간 월이 바뀜!");
          },
        },
        {
          name: "validityYear",
          placeholder: "YY",
          onInputChange: () => {
            console.log("카드 유효기간 년도가 바뀜!");
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
          onInputChange: () => {
            console.log("카드 소유자가 바뀜!");
          },
        },
      ],
    },
  ];

  return (
    <main>
      <CreditCard cardInfo={cardInfo} />
      <Form formFiledPropsList={formFieldPropsList} formErrors={formErrors} />
    </main>
  );
}

export default App;
