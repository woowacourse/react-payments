import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import { numberRegex } from '../../../constant/regularExpression';
import { PasswordContext } from '../../../context/PasswordContext';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  gap: 7px;
`;

function PasswordInput() {
  const {
    orders,
    password,
    validations,
    refs,
    currentOrderRef,
    setPassword,
    setValidations,
  } = useContext(PasswordContext);

  const onPasswordChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (numberRegex.test(data) || !data) {
      const order = target.name;
      const newNumber = target.value;

      updatePassword(order, newNumber);
      updateValidations(order, newNumber);
      focusPrevOrder(order, newNumber, inputType);
      currentOrderRef.current = order;
    }
  };

  const updatePassword = (order, number) => {
    setPassword(prevPassword => ({ ...prevPassword, [order]: number }));
  };

  const updateValidations = (order, number) => {
    setValidations(prevValidations => ({
      ...prevValidations,
      [order]: validator.validatePassword(number),
    }));
  };

  const focusPrevOrder = (currentOrder, newNumber, inputType) => {
    if (
      currentOrder !== orders[0] &&
      newNumber.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      const currentIndex = orders.findIndex(order => order === currentOrder);
      refs[orders[currentIndex - 1]].current.focus();
    }
  };

  const focusInvalidInput = order => {
    if (order && validator.validatePassword(refs[order].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidOrder = Object.keys(validations).find(
        order => !validations[order]
      );
      refs[invalidOrder].current.focus();
    }
  };

  useEffect(() => {
    focusInvalidInput(currentOrderRef.current);
  });

  return (
    <LabeledInput text="카드 비밀번호">
      <InputContainer>
        {Object.keys(password).map(order => (
          <Input
            key={order}
            name={order}
            ref={refs[order]}
            value={password[order]}
            width="43px"
            height="45px"
            type="password"
            maxLength={1}
            onChange={onPasswordChange}
            isValid={validations[order]}
          />
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <Input
            key={index}
            value="."
            width="43px"
            height="45px"
            type="password"
            isValid={true}
            disable={true}
            readonly={true}
          />
        ))}
      </InputContainer>
    </LabeledInput>
  );
}

export default PasswordInput;
