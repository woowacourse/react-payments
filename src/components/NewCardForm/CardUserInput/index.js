import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';
import { CardUserInputWrapper } from './index.styles';

const CardUserInput = ({ user, errorMessage, onChangeCardInput }) => {
  return (
    <CardUserInputWrapper>
      <div className='input-label'>
        <div>카드 소유자 이름 (선택)</div>
        <div>{user.length} / 30</div>
      </div>
      <Input
        type='text'
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        name='user'
        value={user}
        maxLength='30'
        onChange={onChangeCardInput}
      />
      <div className='input-alert'>{errorMessage}</div>
    </CardUserInputWrapper>
  );
};

CardUserInput.propTypes = {
  user: PropTypes.string,
  errorMessage: PropTypes.string,
  onChangeCardInput: PropTypes.func,
};

export default CardUserInput;
