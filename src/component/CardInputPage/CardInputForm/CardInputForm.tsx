import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./cardInputForm.css";

export default function CardInputForm() {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] =
    useState(false);
  const [isOwnerComplete, setIsOwnerComplete] = useState(false);
  const [isSecurityComplete, setIsSecurityComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

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
      {isFormFilled && (
        <Link to="/CardListPage" className="next-button">
          <Button type="submit">다음</Button>
        </Link>
      )}
    </form>
  );
}
