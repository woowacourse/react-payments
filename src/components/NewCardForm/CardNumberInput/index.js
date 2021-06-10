import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import {
  CardNumberInputWrapper,
  InputContainer,
  InputLabel,
  InputAlert,
} from './index.styles';

const CardNumberInput = ({
  numbers,
  errorMessage,
  onChangeCardInputObject,
  cardFormValidation,
}) => {
  return (
    <CardNumberInputWrapper>
      <InputLabel>카드 번호</InputLabel>
      <InputContainer>
        {Object.keys(numbers).map((key, index) => {
          return (
            <>
              <Input
                key={index}
                type='text'
                name='numbers'
                data-detail={key}
                value={numbers[key]}
                onChange={onChangeCardInputObject}
                onBlur={cardFormValidation}
                minLength='4'
                maxLength='4'
                required
              />
              <span />
            </>
          );
        })}
      </InputContainer>
      <InputAlert>{errorMessage}</InputAlert>
    </CardNumberInputWrapper>
  );
};

CardNumberInput.propTypes = {
  numbers: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
    third: PropTypes.string,
    fourth: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  onChangeCardInputObject: PropTypes.func,
  cardFormValidation: PropTypes.func,
};
export default CardNumberInput;
