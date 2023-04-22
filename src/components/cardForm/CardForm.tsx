import styled from "styled-components";
import { CardType } from "../../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface CardFormProps {
  cardInfo: CardType;
  setCardInfo: React.Dispatch<React.SetStateAction<CardType>>;
  addNewCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const CardForm = ({
  cardInfo,
  setCardInfo,
  addNewCards,
}: CardFormProps) => {
  const history = useNavigate();

  const moveToHome = () => {
    history("/");
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

    addNewCards((prev: CardType[]) => {
      const newData = [...prev, newCard];
      localStorage.setItem("cards", JSON.stringify(newData));
      return newData;
    });

    moveToHome();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        setCardNumbers={(index: number, numbers: string) => {
          cardInfo.numbers[index] = numbers;
          setCardInfo({ ...cardInfo, numbers: cardInfo.numbers });
        }}
      />
      <ExpiryDateInput
        expiryDate={cardInfo.expiryDate}
        setExpiryDate={(date: string) => {
          setCardInfo({ ...cardInfo, expiryDate: date });
        }}
      />
      <OwnerInput
        owner={cardInfo.owner}
        setOwner={(owner: string) => {
          setCardInfo({ ...cardInfo, owner: owner });
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
