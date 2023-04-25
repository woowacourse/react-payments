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
import { CreditCard } from "../../../type";
import { deepCopyObject } from "../../../util/deepCopy";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const initialCard: CreditCard = {
  owner: "",
  expirationDate: "",
  bank: "",
  number: [],
  securityCode: "",
  password: [],
};

interface EachUserInputState {
  isComplete: boolean;
  userInput: string | string[];
}

const initialEachUserInputState: EachUserInputState = {
  isComplete: false,
  userInput: "",
};

//하나의 inputState에는 {isComplete:true, userInput: value}
export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);

  const [nowCardInfo, setNowCardInfo] = useState<CreditCard>(initialCard);

  const [cardNumberStatus, setCardNumberStatus] = useState<EachUserInputState>(
    initialEachUserInputState
  );
  const [expirationDateStatus, setExpirationDateStatus] =
    useState<EachUserInputState>(initialEachUserInputState);
  const [ownerStatus, setOwnerStatus] = useState(initialEachUserInputState);
  const [securityCodeStatus, setSecurityCodeStatus] = useState(
    initialEachUserInputState
  );
  const [passwordStatus, setPasswordStatus] = useState(
    initialEachUserInputState
  );

  const navigate = useNavigate();

  const formElement = useRef<HTMLFormElement>(null);

  function changeCardNumberStatus(key: "isComplete" | "userInput", value: any) {
    setCardNumberStatus(deepCopyObject(cardNumberStatus, key, value));
  }

  function changeCardExpirationDateStatus(
    key: "isComplete" | "userInput",
    value: any
  ) {
    setExpirationDateStatus(deepCopyObject(expirationDateStatus, key, value));
  }

  function changeOwnerStatus(key: "isComplete" | "userInput", value: any) {
    setOwnerStatus(deepCopyObject(ownerStatus, key, value));
  }

  function changeSecurityCodeStatus(
    key: "isComplete" | "userInput",
    value: any
  ) {
    setSecurityCodeStatus(deepCopyObject(ownerStatus, key, value));
  }

  function changePasswordStatus(key: "isComplete" | "userInput", value: any) {
    setPasswordStatus(deepCopyObject(ownerStatus, key, value));
  }

  function submitCardInfo(e: SubmitEvent) {
    e.preventDefault();

    if (!formElement.current) return;

    const formData = new FormData(formElement.current);

    const card: CreditCard = {
      owner: formData.get("card-owner")?.toString() as string,
      expirationDate: formData.get("expiration-date")?.toString() as string,
      number: [
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
    resetNowCardInfo();
    navigate("/CardListPage");
  }

  const resetNowCardInfo = () => {
    setNowCardInfo(initialCard);
  };

  const changeNowCardInfo = (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => {
    if (key === "number" && index !== undefined) {
      const updateCardInfo = JSON.parse(JSON.stringify(nowCardInfo));
      updateCardInfo.number[index] = value;

      cardNumberStatus && setNowCardInfo(updateCardInfo);
      return;
    }

    if (key === "expirationDate") {
      setNowCardInfo({ ...nowCardInfo, [key]: value });
      return;
    }
    if (key === "owner") setNowCardInfo({ ...nowCardInfo, [key]: value });
  };

  useEffect(() => {
    if (!isFormFilled) {
      formElement.current?.removeEventListener("submit", submitCardInfo);
    }

    formElement.current?.addEventListener("submit", submitCardInfo);
  }, [isFormFilled]);

  useEffect(() => {
    if (
      cardNumberStatus.isComplete &&
      expirationDateStatus.isComplete &&
      securityCodeStatus.isComplete &&
      passwordStatus.isComplete
    )
      setIsFormFilled(true);
    else setIsFormFilled(false);
  }, [
    cardNumberStatus,
    expirationDateStatus,
    securityCodeStatus,
    passwordStatus,
  ]);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={nowCardInfo} />
      <InputBoxCardNumber
        changeCardNumberStatus={changeCardNumberStatus}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxExpirationDate
        changeCardExpirationDateStatus={changeCardExpirationDateStatus}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxOwner
        changeCardOwnerStatus={changeOwnerStatus}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxSecurityCode
        changeSecurityCodeStatus={changeSecurityCodeStatus}
      />
      {/* <InputBoxPassword changeCardOwnerStatus={changePasswordStatus} /> */}
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}
