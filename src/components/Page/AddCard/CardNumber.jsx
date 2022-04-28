import React from "react";
import PropTypes from "prop-types";

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
  isError,
}) => {
  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
      isError={isError}
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

CardNumber.propTypes = {
  firstCardNumber: PropTypes.string,
  secondCardNumber: PropTypes.string,
  thirdCardNumber: PropTypes.string,
  fourthCardNumber: PropTypes.string,
  onChangeFirstCardNumber: PropTypes.func,
  onChangeSecondCardNumber: PropTypes.func,
  onChangeThirdCardNumber: PropTypes.func,
  onChangeFourthCardNumber: PropTypes.func,
  isError: PropTypes.bool,
};
export default CardNumber;
