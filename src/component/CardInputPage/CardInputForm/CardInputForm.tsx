import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState, useRef, useEffect } from "react";

import "./cardInputForm.css";

const initialFormCondition = {
  cardNumber: true,
  ExpirationDate: true,
  Owner: true,
  SecurityCode: true,
  Password: true,
};

export default function CardInputForm() {
  const [isFormFilled, setIsFormFilled] = useState(initialFormCondition);

  const isFormComplete = Object.values(isFormFilled).every(Boolean);
  console.log(isFormFilled, isFormComplete);

  const formElement = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formElement.current?.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={{}} />
      <InputBoxCardNumber />
      <InputBoxExpirationDate />
      <InputBoxOwner />
      <InputBoxSecurityCode />
      <InputBoxPassword />
      {isFormComplete && <Button type="submit">다음</Button>}
    </form>
  );
}
