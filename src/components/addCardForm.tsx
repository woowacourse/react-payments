import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Validator } from '../type/validator';

import { updateData } from '../utils/localStorage';
import { getFormFields, IFormData } from '../utils/formData';

import { ValidateContext } from '../contexts/validate';

import {
  CardNumber,
  CardPassword,
  ExpiredDate,
  SecurityCode,
  UserName,
} from './Input';

export function AddCardForm() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { valid } = useContext(ValidateContext);

  useEffect(() => {
    checkAllValid();
  }, [
    valid.validCardNumber,
    valid.validDate,
    valid.validName,
    valid.validCode,
    valid.validPassword,
  ]);

  function moveCardList() {
    navigate('/');
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const fields: IFormData = getFormFields(target);
    updateData(fields, 'cards');
    moveCardList();
  }

  function checkAllValid() {
    const isValid = (valid: Validator) =>
      Object.values(valid).every((x) => x === '');
    isValid(valid) === true && setIsComplete(true);
  }

  return (
    // <ValidateProvider>
    <Form onSubmit={handleSubmit}>
      <CardNumber />
      <ExpiredDate />
      <UserName />
      <SecurityCode />
      <CardPassword />
      <ButtonWrapper>
        <CompleteButton type='submit'>다음</CompleteButton>
      </ButtonWrapper>
    </Form>
    // </ValidateProvider>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  margin-left: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CompleteButton = styled.button`
  width: 5rem;

  padding: 0.5rem 0.1rem;

  background-color: black;
  color: #ecebf1;
`;
