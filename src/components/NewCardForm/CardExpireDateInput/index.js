import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardExpireDateInputWrapper } from './index.styles';

const CardExpireDateInput = ({
  expireDate,
  errorMessage,
  onChangeCardInputObject,
  cardFormValidation,
}) => {
  return (
    <CardExpireDateInputWrapper>
      <div className='input-label'>만료일</div>
      <div className='input-container expire-date-container'>
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
        <span className='input-separator gray'>/</span>
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
      </div>
      <div className='input-alert'>{errorMessage}</div>
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
