import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./cardInputForm.css";
import { CreditCard, InputStatus } from "../../../type";
import { deepCopyObject } from "../../../util/deepCopy";
import { EachUserInputState } from "../../../type";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const initialCard: CreditCard = {
  owner: "",
  expirationDate: "",
  bank: "",
  cardNumber: [],
  securityCode: "",
  password: [],
};

const initialEachUserInputState: EachUserInputState = {
  isComplete: false,
  userInput: "",
};

const initialInputStatus = {
  cardNumber: initialEachUserInputState,
  expirationDate: initialEachUserInputState,
  owner: initialEachUserInputState,
  securityCode: initialEachUserInputState,
  password: initialEachUserInputState,
};

//하나의 inputState에는 {isComplete:true, userInput: value}
export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);

  const nowCardInfo = initialCard;

  const navigate = useNavigate();
  const formElement = useRef<HTMLFormElement>(null);

  //total user Input status
  const [inputStatus, setInputStatus] =
    useState<InputStatus>(initialInputStatus);
  const changeInputStatus = (inputName: keyof InputStatus) => {
    return (key: keyof EachUserInputState, value: any) => {
      const updateResult = JSON.parse(JSON.stringify(inputStatus));
      updateResult[inputName][key] = value;
      setInputStatus(updateResult);

      nowCardInfo[inputName] = value;
    };
  };

  function submitCardInfo(e: SubmitEvent) {
    e.preventDefault();

    if (!formElement.current) return;

    const formData = new FormData(formElement.current);

    const card: CreditCard = {
      owner: formData.get("card-owner")?.toString() as string,
      expirationDate: formData.get("expiration-date")?.toString() as string,
      cardNumber: [
        formData.get("card-number-1"),
        formData.get("card-number-2"),
        formData.get("card-number-3"),
        formData.get("card-number-4"),
      ].map(Number),
      securityCode: formData.get("security-code")?.toString() as string,
      password: [
        formData.get("card-password-1"),
        formData.get("card-password-2"),
      ].map(Number),
    };

    addNewCard(card);
    // resetNowCardInfo();
    navigate("/CardListPage");
  }

  // const resetNowCardInfo = () => {
  //   setNowCardInfo(initialCard);
  // };

  const changeNowCardInfo = (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => {
    console.log("👍");
  };

  //유저 입력값이 달라지면 complete를 확인해서 formFilled 여부 처리
  useEffect(() => {
    const { cardNumber, expirationDate, securityCode, password } = inputStatus;
    if (
      cardNumber.isComplete &&
      expirationDate.isComplete &&
      securityCode.isComplete &&
      password.isComplete
    )
      setIsFormFilled(true);
    else setIsFormFilled(false);
  }, [inputStatus]);

  //formFilled 여부에 따라 제출 이벤트 생성/삭제
  useEffect(() => {
    if (!isFormFilled) {
      formElement.current?.removeEventListener("submit", submitCardInfo);
    }

    formElement.current?.addEventListener("submit", submitCardInfo);
  }, [isFormFilled]);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={nowCardInfo} />
      <InputBoxCardNumber
        changeCardNumberStatus={changeInputStatus("cardNumber")}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxExpirationDate
        changeCardExpirationDateStatus={changeInputStatus("expirationDate")}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxOwner
        changeCardOwnerStatus={changeInputStatus("owner")}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxSecurityCode
        changeSecurityCodeStatus={changeInputStatus("securityCode")}
      />
      <InputBoxPassword changePasswordStatus={changeInputStatus("password")} />
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}

// const changeNowCardInfo = (
//   key: keyof CreditCard,
//   value: any,
//   index?: number
// ) => {
//   if (key === "number" && index !== undefined) {
//     const updateCardInfo = JSON.parse(JSON.stringify(nowCardInfo));
//     updateCardInfo.number[index] = value;

//     cardNumberStatus && setNowCardInfo(updateCardInfo);
//     return;
//   }

//   if (key === "expirationDate") {
//     setNowCardInfo({ ...nowCardInfo, [key]: value });
//     return;
//   }
//   if (key === "owner") setNowCardInfo({ ...nowCardInfo, [key]: value });
// };

// const [cardNumberStatus, setCardNumberStatus] = useState<EachUserInputState>(
//   initialEachUserInputState
// );
// const [expirationDateStatus, setExpirationDateStatus] =
//   useState<EachUserInputState>(initialEachUserInputState);
// const [ownerStatus, setOwnerStatus] = useState(initialEachUserInputState);
// const [securityCodeStatus, setSecurityCodeStatus] = useState(
//   initialEachUserInputState
// );
// const [passwordStatus, setPasswordStatus] = useState(
//   initialEachUserInputState
// );

// function changeCardNumberStatus(key: "isComplete" | "userInput", value: any) {
//   setCardNumberStatus(deepCopyObject(cardNumberStatus, key, value));
// }

// function changeCardExpirationDateStatus(
//   key: "isComplete" | "userInput",
//   value: any
// ) {
//   setExpirationDateStatus(deepCopyObject(expirationDateStatus, key, value));
// }

// function changeOwnerStatus(key: "isComplete" | "userInput", value: any) {
//   setOwnerStatus(deepCopyObject(ownerStatus, key, value));
// }

// function changeSecurityCodeStatus(
//   key: "isComplete" | "userInput",
//   value: any
// ) {
//   setSecurityCodeStatus(deepCopyObject(ownerStatus, key, value));
// }

// function changePasswordStatus(key: "isComplete" | "userInput", value: any) {
//   setPasswordStatus(deepCopyObject(passwordStatus, key, value));
// }
