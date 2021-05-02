import React from 'react';
import PropTypes from 'prop-types';

import { CardPasswordInputWrapper } from './index.styles';
import Input from '../../../common/Input';
import { INPUT } from '../../../constants/constant';

const CardPasswordInput = ({ password, errorMessage, onChangeCardInput }) => {
  return (
    <CardPasswordInputWrapper>
      <div className='input-label'>카드 비밀번호</div>
      <div className='input-main password-container'>
        {Object.entries(password).map(([key, value], index) => (
          <Input
            key={index}
            label='카드 비밀번호'
            type='password'
            value={value}
            maxLength={INPUT.MAX_LENGTH.CARD.PASSWORD}
            min='0'
            max='9'
            name={INPUT.NAME.CARD.PASSWORD}
            data-detail={key}
            onChange={onChangeCardInput}
            onBlur={onChangeCardInput}
            required
          />
        ))}

        <div className='privacy-dot'>•</div>
        <div className='privacy-dot'>•</div>
      </div>
      <div className='input-alert'>{errorMessage}</div>
    </CardPasswordInputWrapper>
  );
};

CardPasswordInput.propTypes = {
  password: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
  }),
  errorMessage: PropTypes.string,
  onChangeCardInput: PropTypes.func,
};

export default CardPasswordInput;
