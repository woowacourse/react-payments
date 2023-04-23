import styled from 'styled-components';
import { Layout } from '../layout';
import { CardListContainer } from '../components/CardListContainer';

export const Main = () => {
  return (
    <Layout>
      <Style.Header>보유 카드</Style.Header>
      <CardListContainer />
    </Layout>
  );
};

const Style = {
  Header: styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 25px;

    font-weight: bold;
  `,
};
