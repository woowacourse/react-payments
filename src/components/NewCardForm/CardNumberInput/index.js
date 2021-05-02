import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardNumberInputWrapper } from './index.styles';
import { INPUT } from '../../../constants/constant';

const CardNumberInput = ({ numbers, errorMessage, onChangeCardInput }) => {
  return (
    <CardNumberInputWrapper>
      <div className='input-label'>카드 번호</div>
      <div className='input-container'>
        <Input
          type='number'
          label='카드 번호 첫번째'
          name={INPUT.NAME.CARD.NUMBERS}
          data-detail='first'
          value={numbers.first}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
          min='0'
          max='9999'
          minLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          maxLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          required
        />
        <span className='input-separator'>
          {numbers.first.length === INPUT.MAX_LENGTH.CARD.NUMBERS && '-'}
        </span>
        <Input
          type='number'
          label='카드 번호 두번째'
          name={INPUT.NAME.CARD.NUMBERS}
          data-detail='second'
          value={numbers.second}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
          min='0'
          max='9999'
          minLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          maxLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          required
        />
        <span className='input-separator'>
          {numbers.second.length === INPUT.MAX_LENGTH.CARD.NUMBERS && '-'}
        </span>
        <Input
          type='password'
          label='카드 번호 세번째'
          name={INPUT.NAME.CARD.NUMBERS}
          data-detail='third'
          value={numbers.third}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
          minLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          maxLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          required
        />
        <span className='input-separator'>
          {numbers.third.length === INPUT.MAX_LENGTH.CARD.NUMBERS && '-'}
        </span>
        <Input
          type='password'
          label='카드 번호 네번째'
          name={INPUT.NAME.CARD.NUMBERS}
          data-detail='fourth'
          value={numbers.fourth}
          onChange={onChangeCardInput}
          onBlur={onChangeCardInput}
          minLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          maxLength={INPUT.MAX_LENGTH.CARD.NUMBERS}
          required
        />
      </div>
      <div className='input-alert'>{errorMessage}</div>
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
  onChangeCardInput: PropTypes.func,
};
export default CardNumberInput;
