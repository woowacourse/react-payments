import styled from 'styled-components';
import { CardRegisterForm } from '../components/CardRegisterForm';
import { Header, BackButton } from '../components/common';
import { CardInfoProvider } from '../contexts/cardInfo';
import { CardPreview } from '../components/common/CardPreview';

export function AddCard() {
  return (
    <_AddCardContainer>
      <Header title='카드 추가' render={BackButton} />
      <_Section>
        <CardInfoProvider>
          <CardPreview></CardPreview>
          <CardRegisterForm></CardRegisterForm>
        </CardInfoProvider>
      </_Section>
    </_AddCardContainer>
  );
}

const _AddCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem;
`;

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
