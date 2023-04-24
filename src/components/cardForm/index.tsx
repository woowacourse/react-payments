import styled from "styled-components";
import cardHandler from "../../domain/creditCards";
import { CardType } from "../../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isInputFilled, isMonthValid, isYearValid } from "../../utils/validate";

interface CardFormProps {
  setCardInfo: React.Dispatch<React.SetStateAction<CardType>>;
}

export const CardForm = ({ setCardInfo }: CardFormProps) => {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const isInputValid = (newCard: CardType) => {
    const { numbers, expiryDate, CVC, password } = newCard;
    const [month, year] = expiryDate.split(" / ");

    const isNumberValid = isInputFilled(numbers.join(""), 16);
    const isExpiryDateValid =
      isInputFilled(month + year, 4) &&
      isMonthValid(Number(month)) &&
      isYearValid(Number(year));
    const isCVCValid = isInputFilled(String(CVC), 3);
    const isPasswordValid = isInputFilled(password.join(""), 2);

    return isNumberValid && isExpiryDateValid && isCVCValid && isPasswordValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const newCard = cardHandler.formNewCard(data);

    if (isInputValid(newCard)) {
      cardHandler.addNewCard(newCard);

      moveToHome();
    }
  };

  const setCardNumbers = (index: number, numbers: string) => {
    setCardInfo((prev) => {
      const newNumbers = [...prev.numbers];
      newNumbers[index] = numbers;
      return { ...prev, numbers: newNumbers };
    });
  };

  const setCardData = (property: string) => (newData: string) => {
    setCardInfo((prev) => ({ ...prev, [property]: newData }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput setCardNumbers={setCardNumbers} />
      <ExpiryDateInput setExpiryDate={setCardData("expiryDate")} />
      <OwnerInput setOwner={setCardData("owner")} />
      <CVCInput />
      <PasswordInput />
      <SubmitButton type="submit">다음</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: right;
`;
