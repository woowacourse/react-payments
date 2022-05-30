import React, { useState, useEffect } from "react";

import CardExpiredDate from "./CardExpiredDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";
import useFormValidation from "../../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const focusNextInput = (e: React.FormEvent<HTMLFormElement>) => {
  const targetInputElement = e.target;
  const targetFormElement = e.currentTarget;

  const findElementIndex = Array.from(targetFormElement.elements).findIndex(
    element => element === targetInputElement
  );

  const currentElement = targetFormElement[findElementIndex] as HTMLInputElement;

  if (currentElement.value.length === currentElement.maxLength) {
    const nextElement = targetFormElement[findElementIndex + 1] as HTMLInputElement;

    nextElement.focus();
  }
};

export default function CardInfoForm({ cardTypeValidation = false, showModal, mode = "add" }) {
  const isAddMode = mode === "add";
  const [isNextButtonShown, setIsNextButtonShown] = useState(!isAddMode);
  const { formValidation, validateFormValidation } = useFormValidation({
    cardNumbers: false,
    expiredDate: false,
    userName: false,
    securityCode: false,
    password: false,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = e => {
    e.preventDefault();
    setIsNextButtonShown(true);
    isAddMode ? navigate("/confirmAddCard") : navigate(`/confirmEditCard/${id}`);
  };

  useEffect(() => {
    if (isAddMode && Object.values(formValidation).every(validation => validation)) {
      if (cardTypeValidation) {
        setIsNextButtonShown(true);

        return;
      }
      showModal();
    }
  }, [formValidation, cardTypeValidation]);

  return (
    <form onChange={focusNextInput} onSubmit={onSubmit}>
      <CardNumber validateFormValidation={validateFormValidation} />
      <CardExpiredDate validateFormValidation={validateFormValidation} />
      <CardUserName validateFormValidation={validateFormValidation} />
      <CardSecurityCode validateFormValidation={validateFormValidation} />
      <CardPassword validateFormValidation={validateFormValidation} />
      {isNextButtonShown && (
        <button type="submit" className="submit-button">
          다음
        </button>
      )}
    </form>
  );
}
