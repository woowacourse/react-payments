import React from "react";
import FieldSet from "../../FieldSet";
import CardNumberInput from "../../Input/CardNumberInput";

const CardNumber = () => {
  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
    >
      {<CardNumberInput />}
    </FieldSet>
  );
};

export default CardNumber;
