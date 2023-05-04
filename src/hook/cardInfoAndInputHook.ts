import { useState } from "react";
import { CardCo, CreditCard, InputStatus } from "../type";
import { initialCard, initialCardInputComplete } from "../cardData";

export const useCardInfoAndInputState = (closeModal: Function) => {
  const [inputStatus, setInputStatus] = useState<InputStatus>(
    initialCardInputComplete
  );
  const [nowCardInfo, setNowCardInfo] = useState<CreditCard>(initialCard);

  const changeInputStatus = (inputName: keyof InputStatus) => {
    return (completeState: boolean, value?: string, index?: number) => {
      // 완료/미완료 setting
      const changeInputStatus = JSON.parse(JSON.stringify(inputStatus));
      changeInputStatus[inputName] = completeState;
      setInputStatus(changeInputStatus);

      //user input 입력
      if (!completeState || value === undefined) return;

      const changeNowCard = JSON.parse(JSON.stringify(nowCardInfo));
      if (inputName === "cardCo") {
        changeNowCard[inputName] = value as CardCo;
        setNowCardInfo(changeNowCard);
        closeModal();
      } else if (inputName !== "cardNumber" && inputName !== "password") {
        changeNowCard[inputName] = value;
        setNowCardInfo(changeNowCard);
      } else if (index !== undefined) {
        changeNowCard[inputName][index] = value;
        setNowCardInfo(changeNowCard);
      }
    };
  };
  return { inputStatus, nowCardInfo, changeInputStatus };
};
