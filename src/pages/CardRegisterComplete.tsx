import React from "react";
import CheckIcon from "@assets/CheckIcon.svg?react";
import S from "./CardRegisterComplete.styled";
import { Link, useLocation } from "react-router-dom";

const CardRegisterComplete = () => {
  const location = useLocation();
  const { cardNumber, cardCompany } = location.state;
  return (
    <S.Div>
      <CheckIcon />
      <S.P>
        {cardNumber}로 시작하는 <br /> {cardCompany}가 등록되었어요.
      </S.P>
      <Link to="/">
        <S.Button>확인</S.Button>
      </Link>
    </S.Div>
  );
};

export default CardRegisterComplete;
