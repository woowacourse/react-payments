import styled from "styled-components";
import { CardType } from "../types/card";
import { CVCInput } from "./CVCInput";
import { CardNumberInput } from "./CardNumberInput";
import { ExpiryDateInput } from "./ExpiryDateInput";
import { OwnerInput } from "./OwnerInput";
import { PasswordInput } from "./PasswordInput";

interface CardFormProps {
  cardInfo: CardType;
  setCardInfo: (value: any) => void;
}

export const CardForm = ({ cardInfo, setCardInfo }: CardFormProps) => {
  return (
    <Form>
      <CardNumberInput
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
      <CVCInput
        setCVC={(CVC: number) => {
          setCardInfo({ ...cardInfo, CVC: CVC });
        }}
      />
      <PasswordInput
        setPassword={(password: number[]) => {
          setCardInfo({ ...cardInfo, password: password });
        }}
      />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;
