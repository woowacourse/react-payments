import React from "react";
import CheckIcon from "@assets/CheckIcon.svg?react";
import S from "./CardRegisterComplete.styled";

interface CardRegisterCompleteProp {
  cardNumber: number;
  cardCompany: string;
}
const CardRegisterComplete = ({ cardNumber, cardCompany }: CardRegisterCompleteProp) => {
  return (
    <S.Div>
      <CheckIcon />
      <S.P>
        {cardNumber}로 시작하는 <br /> {cardCompany}가 등록되었어요.
      </S.P>
      <S.Button>확인</S.Button>
    </S.Div>
  );
};

export default CardRegisterComplete;
