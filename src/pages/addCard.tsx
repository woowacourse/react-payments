import styled from 'styled-components';
import { BackButton } from '../components/common/backButton';
import { Header } from '../components/common/Header';
import { CardRegisterForm } from '../components/CardRegisterForm';

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
