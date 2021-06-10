import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import {
  CardExpireDateInputWrapper,
  ExpireDateContainer,
  InputContainer,
  InputAlert,
  InputLabel,
  InputSeperator,
} from './index.styles';

const CardExpireDateInput = ({
  expireDate,
  errorMessage,
  onChangeCardInputObject,
  cardFormValidation,
}) => {
  return (
    <CardExpireDateInputWrapper>
      <InputLabel>만료일</InputLabel>
      <InputContainer>
        <ExpireDateContainer>
          <Input
            type='text'
            placeholder='MM'
            name='expireDate'
            data-detail='month'
            min='01'
            max='12'
            minLength='2'
            maxLength='2'
            value={expireDate.month}
            onChange={onChangeCardInputObject}
            onBlur={cardFormValidation}
            required
          />
          <InputSeperator>/</InputSeperator>
          <Input
            type='text'
            placeholder='YY'
            name='expireDate'
            data-detail='year'
            minLength='2'
            maxLength='2'
            value={expireDate.year}
            onChange={onChangeCardInputObject}
            onBlur={cardFormValidation}
            required
          />
        </ExpireDateContainer>
      </InputContainer>
      <InputAlert>{errorMessage}</InputAlert>
    </CardExpireDateInputWrapper>
  );
};

CardExpireDateInput.propTypes = {
  expireDate: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  onChangeCardInputObject: PropTypes.func,
  cardFormValidation: PropTypes.func,
};

export default CardExpireDateInput;
