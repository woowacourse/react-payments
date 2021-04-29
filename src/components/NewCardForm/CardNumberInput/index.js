import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardNumberInputWrapper } from './index.styles';

const CardNumberInput = ({
  numbers,
  errorMessage,
  onChangeCardInputObject,
}) => {
  return (
    <CardNumberInputWrapper>
      <div className='input-label'>카드 번호</div>
      <div className='input-container'>
        <Input
          type='text'
          name='numbers'
          data-detail='first'
          value={numbers.first}
          onChange={onChangeCardInputObject}
          minLength='4'
          maxLength='4'
          required
        />
        <span className='input-separator'>
          {numbers.first.length === 4 && '-'}
        </span>
        <Input
          type='text'
          name='numbers'
          data-detail='second'
          value={numbers.second}
          onChange={onChangeCardInputObject}
          minLength='4'
          maxLength='4'
          required
        />
        <span className='input-separator'>
          {numbers.second.length === 4 && '-'}
        </span>
        <Input
          type='password'
          name='numbers'
          data-detail='third'
          value={numbers.third}
          onChange={onChangeCardInputObject}
          minLength='4'
          maxLength='4'
          required
        />
        <span className='input-separator'>
          {numbers.third.length === 4 && '-'}
        </span>
        <Input
          type='password'
          name='numbers'
          data-detail='fourth'
          value={numbers.fourth}
          onChange={onChangeCardInputObject}
          minLength='4'
          maxLength='4'
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
  onChangeCardInputObject: PropTypes.func,
};
export default CardNumberInput;
