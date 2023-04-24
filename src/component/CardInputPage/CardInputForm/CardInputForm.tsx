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

const initialCard: CreditCard = {
  owner: "",
  expirationDate: "",
  bank: "",
  number: [],
  securityCode: "",
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
      const result = JSON.parse(JSON.stringify(nowCardInfo));
      result.number[index] = value;

      isCardNumberComplete && setNowCardInfo(result);
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
