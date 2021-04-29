import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardPasswordInputWrapper } from './index.styles';

const CardPasswordInput = ({
  password,
  errorMessage,
  onChangeCardInputObject,
  cardFormValidation,
}) => {
  return (
    <CardPasswordInputWrapper>
      <div className='input-label'>카드 비밀번호</div>
      <div className='input-main password-container'>
        {Object.keys(password).map((key, index) => (
          <Input
            key={index}
            type='password'
            value={password[key]}
            maxLength='1'
            min='0'
            max='9'
            name='password'
            data-detail={key}
            onChange={onChangeCardInputObject}
            onBlur={cardFormValidation}
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
  onChangeCardInputObject: PropTypes.func,
  cardFormValidation: PropTypes.func,
};

export default CardPasswordInput;
