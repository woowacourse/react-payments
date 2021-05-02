import React from 'react';
import PropTypes from 'prop-types';
import { CardExpireDateInputWrapper } from './index.styles';
import Input from '../../../common/Input';
import { INPUT } from '../../../constants/constant';

const CardExpireDateInput = ({
  expireDate,
  errorMessage,
  onChangeCardInput,
}) => {
  return (
    <CardExpireDateInputWrapper>
      <div className='input-label'>만료일</div>
      <div className='input-container expire-date-container'>
        <Input
          type='number'
          label='만료 월'
          placeholder='MM'
          name={INPUT.NAME.CARD.EXPIRE_DATE}
          data-detail='month'
          min='01'
          max='12'
          minLength={INPUT.MAX_LENGTH.CARD.EXPIRE_DATE}
          maxLength={INPUT.MAX_LENGTH.CARD.EXPIRE_DATE}
          value={expireDate.month}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
          required
        />
        <span className='input-separator gray'>/</span>
        <Input
          type='number'
          label='만료 년'
          placeholder='YY'
          name={INPUT.NAME.CARD.EXPIRE_DATE}
          data-detail='year'
          min='21'
          minLength={INPUT.MAX_LENGTH.CARD.EXPIRE_DATE}
          maxLength={INPUT.MAX_LENGTH.CARD.EXPIRE_DATE}
          value={expireDate.year}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
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
  onChangeCardInput: PropTypes.func,
};

export default CardExpireDateInput;
