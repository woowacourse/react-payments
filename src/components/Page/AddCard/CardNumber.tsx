import React from 'react';
import PropTypes from 'prop-types';

import FieldSet from 'components/FieldSet/index';
import CardNumberInput from 'components/Input/CardNumberInput';

type CardNumberProps = {
  cardNumbers: Array<Number>;
  onChangeFirstCardNumber: Function;
  onChangeSecondCardNumber: Function;
  onChangeThirdCardNumber: Function;
  onChangeFourthCardNumber: Function;
  isError: boolean;
};

const CardNumber = ({
  cardNumbers,
  onChangeFirstCardNumber,
  onChangeSecondCardNumber,
  onChangeThirdCardNumber,
  onChangeFourthCardNumber,
  isError,
}: CardNumberProps) => {
  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
      isError={isError}
    >
      <CardNumberInput
        cardNumbers={cardNumbers}
        onChangeFirstCardNumber={onChangeFirstCardNumber}
        onChangeSecondCardNumber={onChangeSecondCardNumber}
        onChangeThirdCardNumber={onChangeThirdCardNumber}
        onChangeFourthCardNumber={onChangeFourthCardNumber}
      />
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
