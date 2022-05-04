import React from 'react';
import PropTypes from 'prop-types';

import FieldSet from '../../FieldSet';
import CardNumberInput from '../../Input/CardNumberInput';

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
    </FieldSet>
  );
};

CardNumber.propTypes = {
  firstCardNumber: PropTypes.string.isRequired,
  secondCardNumber: PropTypes.string.isRequired,
  thirdCardNumber: PropTypes.string.isRequired,
  fourthCardNumber: PropTypes.string.isRequired,
  onChangeFirstCardNumber: PropTypes.func.isRequired,
  onChangeSecondCardNumber: PropTypes.func.isRequired,
  onChangeThirdCardNumber: PropTypes.func.isRequired,
  onChangeFourthCardNumber: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};
export default CardNumber;
