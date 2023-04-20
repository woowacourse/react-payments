import styled from "styled-components";
import { CardType } from "../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";
import { FormEvent } from "react";
import { pushData } from "../page/Home";
import { useNavigate } from "react-router-dom";

interface CardFormProps {
  cardInfo: CardType;
  setCardInfo: (value: any) => void;
}

export const CardForm = ({ cardInfo, setCardInfo }: CardFormProps) => {
  const history = useNavigate();

  const moveToHome = () => {
    history("/");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const newCard = {
      numbers: data.cardNumber,
      expiryDate: data.expiryDate,
      owner: data.owner,
      color: "#525252",
      CVC: Number(data.cvc),
      password: [Number(data.password1), Number(data.password2)],
    };

    pushData(newCard);
    moveToHome();

    console.log(newCard);
    //if(isValidate) return;
    // dataUpdate 로컬 스토리지?
    //페이지 이동
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumberInput
        cardNumbers={cardInfo.numbers}
        setCardNumbers={(numbers: string) => {
          setCardInfo({ ...cardInfo, numbers: numbers });
        }}
      />
      <ExpiryDateInput
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
