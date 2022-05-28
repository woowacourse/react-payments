import styled from 'styled-components';
import SubmitButton from '../../Atoms/SubmitButton';
import { FormEventHandler, ReactNode } from 'react';

interface CardNameFormProps {
  onCardNameSubmit: FormEventHandler;
  children: ReactNode;
}

function CardNameForm({ onCardNameSubmit, children }: CardNameFormProps) {
  return (
    <Form onSubmit={onCardNameSubmit}>
      {children}
      <SubmitButtonWrapper>
        <SubmitButton>건너뛰기</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
}

export default CardNameForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 234px;
  width: 100%;
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
