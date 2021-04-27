import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { InputContainer } from '../InputContainer';
import { ValidMessage } from '../InputContainer/ValidMessage';
import { NumbersInputContainer } from '../InputContainer/NumbersInputContainer';
import { ValidDayInputContainer } from '../InputContainer/ValidDayInputContainer';
import { OwnerInputContainer } from '../InputContainer/OwnerInputContainer';
import { CvcInputContainer } from '../InputContainer/CvcInputContainer';
import { PasswordInputContainer } from '../InputContainer/PasswordInputContainer';
import { InputButton } from '../InputButton';

/**
 * Primary UI component for user interaction
 */
export const CardCreateForm = ({ numbers, validDay, owner, cvc, password, isValidEveryInput }) => {
  return (
    <Styled.Form>
      <InputContainer title={'카드 번호'}>
        {!numbers.isValid && <ValidMessage validMessage={'카드 번호를 모두 입력해주세요.'} />}
        <NumbersInputContainer numbers={numbers.value} handleChange={numbers.handleChange} />
      </InputContainer>
      <InputContainer title={'만료일'}>
        {!validDay.isValid && <ValidMessage validMessage={'유효한 날짜가 아닙니다.'} />}
        <ValidDayInputContainer validDay={validDay.value} handleChange={validDay.handleChange} />
      </InputContainer>
      <InputContainer title={'카드 소유자 이름 (선택)'}>
        <ValidMessage
          validMessage={!owner.isValid ? '카드의 이름과 다릅니다.' : ''}
          isVisibleTextLength={true}
          textLength={30}
          inputValue={owner.value}
        />
        <OwnerInputContainer owner={owner.value} handleChange={owner.handleChange} />
      </InputContainer>
      <InputContainer title={'보안 코드 (CVC/CVV)'}>
        {!cvc.isValid && <ValidMessage validMessage={'보안 코드가 정확하지 않습니다.'} />}
        <CvcInputContainer cvc={cvc.value} handleChange={cvc.handleChange} />
      </InputContainer>
      <InputContainer title={'카드 비밀번호'}>
        {!password.isValid && <ValidMessage validMessage={'비밀번호가 정확하지 않습니다.'} />}
        <PasswordInputContainer password={password.value} handleChange={password.handleChange} />
      </InputContainer>
      <Styled.ButtonContainer>
        {isValidEveryInput && <InputButton text={'다음'} />}
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};

CardCreateForm.propTypes = {
  numbers: PropTypes.shape({
    value: PropTypes.object,
    handleChange: PropTypes.func,
    isValid: PropTypes.bool,
  }),
  validDay: PropTypes.shape({
    value: PropTypes.object,
    handleChange: PropTypes.func,
    isValid: PropTypes.bool,
  }),
  owner: PropTypes.shape({
    value: PropTypes.string,
    handleChange: PropTypes.func,
    isValid: PropTypes.bool,
  }),
  cvc: PropTypes.shape({
    value: PropTypes.string,
    handleChange: PropTypes.func,
    isValid: PropTypes.bool,
  }),
  password: PropTypes.shape({
    value: PropTypes.object,
    handleChange: PropTypes.func,
    isValid: PropTypes.bool,
  }),
};

CardCreateForm.defaultProps = {
  numbers: {
    value: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    handleChange: () => {},
    isValid: false,
  },
  validDay: {
    value: {
      month: '02',
      year: '26',
    },
    handleChange: () => {},
    isValid: false,
  },
  owner: {
    value: 'SUN',
    handleChange: () => {},
    isValid: false,
  },
  cvc: {
    value: '777',
    handleChange: () => {},
    isValid: false,
  },
  password: {
    value: { firstDigit: 1, secondDigit: 2 },
    handleChange: () => {},
    isValid: false,
  },
};
