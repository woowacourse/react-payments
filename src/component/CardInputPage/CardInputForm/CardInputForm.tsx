import CreditCard from "../../../type/CreditCard";
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

interface Props {
  addNewCard: (card: CreditCard) => void;
}

const getDefaultCreditCard = (): CreditCard => ({
  name: '',
  date: '',
  number: [],
  securityCode: 0,
  password: 0,
});


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
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [cardPreviewData, setCardPreviewData] = useState<CreditCard>(getDefaultCreditCard());

  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);
  const [isExpirationDateComplete, setIsExpirationDateComplete] = useState(false);
  const [isOwnerComplete, setIsOwnerComplete] = useState(false);
  const [isSecurityComplete, setIsSecurityComplete] = useState(false);
  const [isPasswordComplete, setIsPasswordComplete] = useState(false);

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
      <CardPreview card={cardPreviewData} />
      <InputBoxCardNumber
        setIsComplete={setIsCardNumberComplete}
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxExpirationDate
        setIsComplete={setIsExpirationDateComplete}
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxOwner
        setIsComplete={setIsOwnerComplete}
        setPreviewDataHandler={setCardPreviewDataFromForm}
      />
      <InputBoxSecurityCode setIsComplete={setIsSecurityComplete} />
      <InputBoxPassword setIsComplete={setIsPasswordComplete} />
      {isFormFilled && <Button type="submit">다음</Button>}
    </form>
  );
}
