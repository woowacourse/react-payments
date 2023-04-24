import styled from 'styled-components';
import { CardRegisterForm } from '../components/CardRegisterForm';
import { Header, BackButton } from '../components/common';

export function AddCard() {
  return (
    <AddCardContainer>
      <Header title='카드 추가' render={() => BackButton()} />
      <CardRegisterForm></CardRegisterForm>
    </AddCardContainer>
  );
}

const AddCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem;
`;
