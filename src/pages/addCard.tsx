import styled from 'styled-components';
import { CardRegisterForm } from '../components/CardRegisterForm';
import { Header, BackButton } from '../components/common';
import { CardInfoProvider } from '../contexts/cardInfo';
import { CardPreview } from '../components/common/CardPreview';

export function AddCard() {
  return (
    <AddCardContainer>
      <Header title='카드 추가' render={() => BackButton()} />
      <Section>
        <CardInfoProvider>
          <CardPreview></CardPreview>
          <CardRegisterForm></CardRegisterForm>
        </CardInfoProvider>
      </Section>
    </AddCardContainer>
  );
}

const AddCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
