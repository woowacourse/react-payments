import styled from 'styled-components';
import { NewCreditCardButton } from '../NewCreditCardButton';
import { Page } from '../common/Page';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreditCardListPage = () => {
  return (
    <Page>
      <Page.Header>보유카드</Page.Header>
      <Content>
        <NewCreditCardButton helperText />
      </Content>
    </Page>
  );
};
