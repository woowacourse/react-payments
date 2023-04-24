import styled from 'styled-components';
import { LABEL, MAX_LENGTH, PLACEHOLDER } from '../constants/inputInfo';
import { useForm } from '../hooks/useForm';
import { Input, Label, ErrorMessage } from './common';
import { useEffect } from 'react';
import { ERROR_MESSAGE } from '../constants/errors';
import { LabelOption } from '../type/input';
import { joinValues, matchKeyWithId } from '../utils/infoKey';
import { cardList } from '../data/localStorage';
import { getFormFields } from '../utils/formData';
import { updateData } from '../utils/localStorage';
import { Card } from '../type/card';

interface InputInfo {
  value: any;
  type: string;
  error: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  regexp: RegExp;
}
interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string | undefined;
  inputs: InputInfo[];
}
// type FormProps = {};
function InputBox({ id, inputs }: InputBoxProps) {
  return (
    <_InputBox>
      {inputs.map(({ type, value, handleChange, required, error }, index) => (
        <>
          <_InputWrapper>
            <Input
              id={`${id}${index}`}
              name={`${id}${index}`}
              type={type}
              value={value}
              onChange={handleChange}
              required={required}
              placeholder={PLACEHOLDER[matchKeyWithId(`${id}${index}`)]}
              maxLength={MAX_LENGTH[`${id}`]}
            />
            <ErrorMessage>
              {error && ERROR_MESSAGE[matchKeyWithId(`${id}${index}`)]}
            </ErrorMessage>
          </_InputWrapper>
        </>
      ))}
    </_InputBox>
  );
}

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 1rem;
`;

const _InputBox = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 0.7rem;
`;

export function CardRegisterForm() {
  const inputList = useForm();

  const allInputs = [
    ...inputList.CARD_NUMBER,
    ...inputList.DATE,
    ...inputList.USERNAME,
    ...inputList.CODE,
    ...inputList.CARD_PASSWORD,
  ];

  const requiredInputs = allInputs.filter((input) => input.required);
  const isRequiredInputValid = requiredInputs.every(
    ({ value, error }) => value && !error
  );

  const optionalInputs = allInputs.filter((input) => !input.required);
  const isOptionalInputValid = optionalInputs.every(({ value, error }) =>
    value ? value && !error : true
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = getFormFields(e.target as HTMLFormElement);
    const submittedCardInfo = {
      ...joinValues(fields, 'CARD_NUMBER'),
      ...joinValues(fields, 'DATE'),
      ...joinValues(fields, 'USERNAME'),
      ...joinValues(fields, 'CODE'),
      ...joinValues(fields, 'CARD_PASSWORD'),
    };

    console.log(submittedCardInfo);
    cardList.updateData(submittedCardInfo as unknown as Card);
  }

  return (
    <_Form onSubmit={handleSubmit}>
      {Object.entries(inputList).map(([key, inputs]) => (
        <_InputContainer>
          <Label htmlFor={key}>{LABEL[key]}</Label>
          <InputBox id={key} inputs={inputs}></InputBox>
        </_InputContainer>
      ))}
      {isRequiredInputValid && isOptionalInputValid && (
        <ButtonWrapper>
          <CompleteButton type='submit'>다음</CompleteButton>
        </ButtonWrapper>
      )}
    </_Form>
  );
}

const _Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 1rem;
`;

const _InputContainer = styled.div`
  position: relative;
  width: 31.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CompleteButton = styled.button`
  width: 5rem;
  padding: 0.5rem 0.1rem;
  color: black;
  background-color: White;
  font-weight: bold;

  cursor: pointer;
`;
