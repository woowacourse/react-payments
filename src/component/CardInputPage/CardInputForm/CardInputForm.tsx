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

  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] =
    useState(false);
  const [isOwnerComplete, setIsOwnerComplete] = useState(false);
  const [isSecurityComplete, setIsSecurityComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

  const isFormComplete = Object.values(isFormFilled).every(Boolean);

  const formElement = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formElement.current?.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    if (
      isCardNumberComplete &&
      isExpirationDateComplete &&
      isSecurityComplete &&
      isPasswordComplete
    )
      console.log("입력이 완료되었습니다!");
    else console.log("미완성 입력이에요ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ");
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
      {isFormComplete && <Button type="submit">다음</Button>}
    </form>
  );
}
