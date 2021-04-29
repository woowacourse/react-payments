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

const validMessages = {
  first: '첫 번째 카드번호를 입력해주세요.',
  second: '두 번째 카드번호를 입력해주세요.',
  third: '세 번째 카드번호를 입력해주세요.',
  fourth: '네 번째 카드번호를 입력해주세요.',
  month: '유효한 월을 입력해주세요. (1월부터 12월)',
  year: '유효한 년도를 입력해주세요. (올해부터 5년 이내)',
  owner: '카드의 이름과 다릅니다.',
  cvc: '보안코드를 입력해주세요.',
  firstDigit: '비밀번호 첫 번째 자리를 입력해주세요.',
  secondDigit: '비밀번호 두 번째 자리를 입력해주세요.',
};

export const CardCreateForm = ({
  numbers,
  validDay,
  owner,
  cvc,
  password,
  isValidEveryInput,
  submitCardDetail,
}) => {
  const hasInvalidNumbers = () => {
    return Object.keys(numbers.isValid).find((key) => !numbers.isValid[key]);
  };

  const hasInvalidDay = () => {
    return Object.keys(validDay.isValid).find((key) => !validDay.isValid[key]);
  };

  const hasInvalidPassword = () => {
    return Object.keys(password.isValid).find((key) => !password.isValid[key]);
  };

  return (
    <Styled.Form onSubmit={submitCardDetail}>
      <InputContainer title={'카드 번호'}>
        {hasInvalidNumbers() && <ValidMessage validMessage={validMessages[hasInvalidNumbers()]} />}
        <NumbersInputContainer
          numbers={numbers.value}
          isValid={!hasInvalidNumbers()}
          handleChange={numbers.handleChange}
          handleBlur={numbers.handleBlur}
        />
      </InputContainer>
      <InputContainer title={'만료일'}>
        {hasInvalidDay() && <ValidMessage validMessage={validMessages[hasInvalidDay()]} />}
        <ValidDayInputContainer
          validDay={validDay.value}
          isValid={!hasInvalidDay()}
          handleChange={validDay.handleChange}
          handleBlur={validDay.handleBlur}
        />
      </InputContainer>
      <InputContainer title={'카드 소유자 이름 (선택)'}>
        <ValidMessage
          validMessage={!owner.isValid ? validMessages[owner] : ''}
          isVisibleTextLength={true}
          textLength={15}
          inputValue={owner.value}
        />
        <OwnerInputContainer owner={owner.value} handleChange={owner.handleChange} />
      </InputContainer>
      <InputContainer title={'보안 코드 (CVC/CVV)'}>
        {!cvc.isValid && <ValidMessage validMessage={validMessages['cvc']} />}
        <CvcInputContainer
          cvc={cvc.value}
          isValid={cvc.isValid}
          handleChange={cvc.handleChange}
          handleBlur={cvc.handleBlur}
        />
      </InputContainer>
      <InputContainer title={'카드 비밀번호'}>
        {hasInvalidPassword() && (
          <ValidMessage validMessage={validMessages[hasInvalidPassword()]} />
        )}
        <PasswordInputContainer
          password={password.value}
          isValid={!hasInvalidPassword()}
          handleChange={password.handleChange}
          handleBlur={password.handleBlur}
        />
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
    isValid: PropTypes.object,
  }),
  validDay: PropTypes.shape({
    value: PropTypes.object,
    handleChange: PropTypes.func,
    isValid: PropTypes.object,
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
    isValid: PropTypes.object,
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
