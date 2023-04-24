import { CreditCard , getDefaultCreditCard } from "../../../type/CreditCard";
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
import useBooleanSeriesConnection from "../../../hook/useBooleanSeriesConnection";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const getFormData = (form: HTMLFormElement): CreditCard => {
  const card =  getDefaultCreditCard();
  const formData = new FormData(form);

  card.name = (formData.get("card-owner")|| '').toString();
  card.date = (formData.get("expiration-date") || '').toString();
  card.number = [
      (formData.get("card-number-1") || '').toString(),
      (formData.get("card-number-2") || '').toString(),
      (formData.get("card-number-3") || '').toString(),
      (formData.get("card-number-4") || '').toString(),
  ];
  card.securityCode = Number(formData.get("security-code"));
  card.password = (
    Number(formData.get("card-password-1")) * 10 +
    Number(formData.get("card-password-2")?.toString())
  );

  return card;
};

export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const [cardPreviewData, setCardPreviewData] = useState<CreditCard>(getDefaultCreditCard());

  const { 
    isAllTrue: isAllComplete,
    getSetBooleanHandler: getSetCompleteStatus
  } = useBooleanSeriesConnection(4);

  const navigate = useNavigate();

  const formElement = useRef<HTMLFormElement>(null);

  const setCardPreviewDataFromForm = () => {
    const data = formElement.current
      ? getFormData(formElement.current)
      : getDefaultCreditCard();
    
    setCardPreviewData(data);
  };

  const event = (e: SubmitEvent) => {
    e.preventDefault();

    const card = formElement.current && getFormData(formElement.current);

    if (!card) return;

    addNewCard(card);

    navigate("/CardListPage");
  }

  useEffect(() => {
    if (!isAllComplete) {
      formElement.current?.removeEventListener("submit", event);
    }

    formElement.current?.addEventListener("submit", event);
  }, [isAllComplete]);

  return (
    <form ref={formElement} className="form">
      <CardPreview card={cardPreviewData} />
      <InputBoxCardNumber
        setIsComplete={getSetCompleteStatus(0)}
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxExpirationDate
        setIsComplete={getSetCompleteStatus(1)}
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxOwner
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxSecurityCode
        setIsComplete={getSetCompleteStatus(2)}
      />
      <InputBoxPassword
        setIsComplete={getSetCompleteStatus(3)}
      />
      {isAllComplete && <Button type="submit">다음</Button>}
    </form>
  );
}
