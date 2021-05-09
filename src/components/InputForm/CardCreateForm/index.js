import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { InputContainer } from '../InputContainer';
import { NumbersInputContainer } from '../InputContainer/NumbersInputContainer';
import { ValidDayInputContainer } from '../InputContainer/ValidDayInputContainer';
import { OwnerInputContainer } from '../InputContainer/OwnerInputContainer';
import { CvcInputContainer } from '../InputContainer/CvcInputContainer';
import { PasswordInputContainer } from '../InputContainer/PasswordInputContainer';
import { InputButton } from '../InputButton';
import { INPUT_TITLE, VALID_MESSAGES } from '../../../utils/constants/messages.js';

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
      <InputContainer 
        title={INPUT_TITLE.CARD_NUMBER}
        validMessage={hasInvalidNumbers() && VALID_MESSAGES[hasInvalidNumbers()]}
      >
        <NumbersInputContainer
          numbers={numbers.value}
          isValid={!hasInvalidNumbers()}
          handleChange={numbers.handleChange}
          handleBlur={numbers.handleBlur}
        />
      </InputContainer>
      <InputContainer 
        title={INPUT_TITLE.VALID_DAY}
        validMessage={hasInvalidDay() && VALID_MESSAGES[hasInvalidDay()]}
      >
        <ValidDayInputContainer
          validDay={validDay.value}
          isValid={!hasInvalidDay()}
          handleChange={validDay.handleChange}
          handleBlur={validDay.handleBlur}
        />
      </InputContainer>
      <InputContainer 
        title={INPUT_TITLE.OWNER}
        validMessage={!owner.isValid ? VALID_MESSAGES[owner] : ''}
        isVisibleTextLength={true}
        textLength={15}
        inputValue={owner.value}
      >
        <OwnerInputContainer owner={owner.value} type={'text'} maxLength={15} handleChange={owner.handleChange} />
      </InputContainer>
      <InputContainer
        title={INPUT_TITLE.CVC}
        validMessage={!cvc.isValid && VALID_MESSAGES['cvc']}
      >
        <CvcInputContainer
          cvc={cvc.value}
          isValid={cvc.isValid}
          type={'password'}
          maxLength={3}
          handleChange={cvc.handleChange}
          handleBlur={cvc.handleBlur}
        />
      </InputContainer>
      <InputContainer 
        title={INPUT_TITLE.PASSWORD}
        validMessage={hasInvalidPassword() && VALID_MESSAGES[hasInvalidPassword()]}
      >
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
  isValidEveryInput: PropTypes.bool,
  submitCardDetail: PropTypes.func,
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
