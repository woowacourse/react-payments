import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import { FormEventHandler, ReactNode } from 'react';

interface CardAddFormProps {
  isValidForm: boolean;
  onCardInfoSubmit: FormEventHandler;
  children: ReactNode;
}

function CardAddForm({ isValidForm, onCardInfoSubmit, children }: CardAddFormProps) {
  return (
    <FormWrapper onSubmit={onCardInfoSubmit}>
      {children}
      <ButtonWrapper>
        <SubmitButton hidden={!isValidForm}>다음</SubmitButton>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default CardAddForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
