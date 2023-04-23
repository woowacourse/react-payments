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

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const initialCard = {
  name: "",
  date: "",
  bank: "",
  number: [],
  securityCode: 0,
  password: [],
};

export default function CardInputForm(props: Props) {
  const { addNewCard } = props;
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [nowCardInfo, setNowCardInfo] = useState<CreditCard>(initialCard);

  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] =
    useState(false);
  const [isOwnerComplete, setIsOwnerComplete] = useState(false);
  const [isSecurityComplete, setIsSecurityComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

  const navigate = useNavigate();

  const formElement = useRef<HTMLFormElement>(null);

  function submitCardInfo(e: SubmitEvent) {
    e.preventDefault();

    if (!formElement.current) return;

    console.log(formElement.current);
    const formData = new FormData(formElement.current);

    const card: CreditCard = {
      name: formData.get("card-owner")?.toString(),
      date: formData.get("expiration-date")?.toString(),
      number: [
        formData.get("card-number-1"),
        formData.get("card-number-2"),
        formData.get("card-number-3"),
        formData.get("card-number-4"),
      ].map(Number),
      securityCode: Number(formData.get("security-code")),
      password: [
        formData.get("card-password-1"),
        formData.get("card-password-2"),
      ].map(Number),
    };

    addNewCard(card);

    navigate("/CardListPage");
  }

  const changeNowCardInfo = (
    key: keyof CreditCard,
    value: any,
    index?: number
  ) => {
    if (key === "number" && index !== undefined) {
      const result = { ...nowCardInfo };
      if (result.number !== undefined) result.number[index] = value;
      isCardNumberComplete && setNowCardInfo(result);
      return;
    }

    if (key === "date") {
      console.log(isExpirationDateComplete);
      setNowCardInfo({ ...nowCardInfo, [key]: value });
      return;
    }
    if (key === "name" && isOwnerComplete)
      setNowCardInfo({ ...nowCardInfo, [key]: value });
  };

  useEffect(() => {
    if (!isFormFilled) {
      formElement.current?.removeEventListener("submit", submitCardInfo);
    }

    formElement.current?.addEventListener("submit", submitCardInfo);
  }, [isFormFilled]);

  useEffect(() => {
    if (
      isCardNumberComplete &&
      isExpirationDateComplete &&
      isSecurityComplete &&
      isPasswordComplete
    )
      setIsFormFilled(true);
    else setIsFormFilled(false);
  }, [
    isCardNumberComplete,
    isExpirationDateComplete,
    isSecurityComplete,
    isPasswordComplete,
  ]);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={nowCardInfo} />
      <InputBoxCardNumber
        setIsComplete={setIsCardNumberComplete}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxExpirationDate
        setIsComplete={setIsExpirationDateComplete}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxOwner
        setIsComplete={setIsOwnerComplete}
        changeNowCardInfo={changeNowCardInfo}
      />
      <InputBoxSecurityCode setIsComplete={setIsSecurityComplete} />
      <InputBoxPassword setIsComplete={setIsPasswordComplete} />
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}
