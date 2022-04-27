import React from "react";
import FieldSet from "../../FieldSet";
import CardNumberInput from "../../Input/CardNumberInput";

const CardNumber = ({
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
}) => {
  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
    >
      {
        <CardNumberInput
          firstCardNumber={firstCardNumber}
          secondCardNumber={secondCardNumber}
          thirdCardNumber={thirdCardNumber}
          fourthCardNumber={fourthCardNumber}
          onChangeFirstCardNumber={onChangeFirstCardNumber}
          onChangeSecondCardNumber={onChangeSecondCardNumber}
          onChangeThirdCardNumber={onChangeThirdCardNumber}
          onChangeFourthCardNumber={onChangeFourthCardNumber}
        />
      }
    </FieldSet>
  );
};

export default CardNumber;
