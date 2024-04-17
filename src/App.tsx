import { useState } from "react";
import "./App.css";
import CreditCard from "./Components/CreditCard";
import Form from "./Components/Form";

function App() {
  const formFieldPropsList: FormFieldInfo[] = [
    {
      key: "cardNumbers",
      title: "결제할 카드 번호를 입력해 주세요",
      description: "본인 명의의 카드만 결제 가능합니다.",
      label: "카드 번호",
      inputPlaceholderList: Array(4).fill("1234"),
      initialValue: [],
    },
    {
      key: "cardValidityPeriod",
      title: "카드 유효기간을 입력해 주세요",
      description: "월/년도(MM/YY)를 순서대로 입력해 주세요.",
      label: "유효기간",
      inputPlaceholderList: ["MM", "YY"],
      initialValue: { month: undefined, year: undefined },
    },
    {
      key: "ownerName",
      title: "카드 소유자 이름을 입력해 주세요",
      label: "소유자 이름",
      inputPlaceholderList: ["PARK JEONG-WOO"],
      initialValue: undefined,
    },
  ];

  const createCardInfo = (formFields: FormFieldInfo[]): CardInfo => {
    return formFields.reduce((object, props) => {
      const { key, initialValue } = props;
      object[key] = initialValue;
      return object;
    }, {} as CardInfo);
  };
  const [cardInfo, setCardInfo] = useState<CardInfo>(createCardInfo(formFieldPropsList));

  return (
    <main>
      <CreditCard cardInfo={cardInfo} />
      <Form setCardInfo={setCardInfo} formFiledPropsList={formFieldPropsList} />
    </main>
  );
}

export default App;
