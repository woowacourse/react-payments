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

interface CreditCard {
  name: string;
  date: string;
  bank?: string;
  number: number[];
  securityCode: number;
  password: number;
}

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputForm(props: Props) {
  const { addNewCard } = props;
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] = useState(false);
  const [isOwnerComplete, setIsOwnerComplete] = useState(false);
  const [isSecurityComplete, setIsSecurityComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

  const navigate = useNavigate();

  const formElement = useRef<HTMLFormElement>(null);

  const event = (e: SubmitEvent) => {
    e.preventDefault();

    if (!formElement.current) return;

    const formData = new FormData(formElement.current);

    const card: CreditCard = {
      name: (formData.get("card-owner")|| '').toString(),
      date: (formData.get("expiration-date") || '').toString(),
      number: [
        formData.get("card-number-1"),
        formData.get("card-number-2"),
        formData.get("card-number-3"),
        formData.get("card-number-4"),
      ].map(Number),
      securityCode: Number(formData.get("security-code")),
      password:
        Number(formData.get("card-password-1")) +
        Number(formData.get("card-password-2")),
    };

    addNewCard(card);

    navigate("/CardListPage");
  }

  useEffect(() => {
    if (!isFormFilled) {
      formElement.current?.removeEventListener("submit", event);
    }

    formElement.current?.addEventListener("submit", event);
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
      <CardPreview card={{}} />
      <InputBoxCardNumber setIsComplete={setIsCardNumberComplete} />
      <InputBoxExpirationDate setIsComplete={setIsExpirationDateComplete} />
      <InputBoxOwner setIsComplete={setIsOwnerComplete} />
      <InputBoxSecurityCode setIsComplete={setIsSecurityComplete} />
      <InputBoxPassword setIsComplete={setIsPasswordComplete} />
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}
