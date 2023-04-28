import styled from 'styled-components';
import { Layout } from '../layout';
import { CardAliasAddForm } from '../components/Form/CardAliasAddForm';

export function AliasAddition() {
  return (
    <Layout>
      <Style.Container>
        <Style.Title>카드등록이 완료되었습니다.</Style.Title>
        <CardAliasAddForm />
      </Style.Container>
    </Layout>
  );
}

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
  `,

  Title: styled.h1`
    width: 100%;

    margin-top: 70px;
    margin-bottom: 36px;

    font-size: 24px;
    font-weight: 500;
    text-align: center;
  `,
};
