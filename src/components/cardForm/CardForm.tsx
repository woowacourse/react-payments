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

interface CardFormProps {
  setCardInfo: React.Dispatch<React.SetStateAction<CardType>>;
}

export const CardForm = ({ setCardInfo }: CardFormProps) => {
  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const newCard = {
      numbers: [
        String(data.cardNumber1),
        String(data.cardNumber2),
        String(data.cardNumber3),
        String(data.cardNumber4),
      ],
      expiryDate: String(data.expiryDate),
      owner: String(data.owner),
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
      color: "#de75d0",
    };

    cardHandler.addNewCard(newCard);

    moveToHome();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        setCardNumbers={(index: number, numbers: string) => {
          setCardInfo((prev) => {
            prev.numbers[index] = numbers;
            return { ...prev, numbers: prev.numbers };
          });
        }}
      />
      <ExpiryDateInput
        setExpiryDate={(date: string) => {
          setCardInfo((prev) => ({ ...prev, expiryDate: date }));
        }}
      />
      <OwnerInput
        setOwner={(owner: string) => {
          setCardInfo((prev) => ({ ...prev, owner }));
        }}
      />
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
