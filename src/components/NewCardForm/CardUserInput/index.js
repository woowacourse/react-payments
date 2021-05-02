import React from 'react';
import PropTypes from 'prop-types';
import { CardUserInputWrapper } from './index.styles';
import Input from '../../../common/Input';
import { INPUT } from '../../../constants/constant';

const CardUserInput = ({ user, errorMessage, onChangeCardInput }) => {
  return (
    <CardUserInputWrapper>
      <div className='input-label'>
        <div>카드 소유자 이름 (선택)</div>
        <div>
          {user.length} / {INPUT.MAX_LENGTH.CARD.USER}
        </div>
      </div>
      <Input
        type='text'
        label='카드 소유자 이름'
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        name={INPUT.NAME.CARD.USER}
        value={user}
        maxLength={INPUT.MAX_LENGTH.CARD.USER}
        onChange={onChangeCardInput}
        onBlur={onChangeCardInput}
      />
      <div className='input-alert'>{errorMessage}</div>
    </CardUserInputWrapper>
  );
};

CardUserInput.propTypes = {
  user: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChangeCardInput: PropTypes.func.isRequired,
};

export default CardUserInput;
