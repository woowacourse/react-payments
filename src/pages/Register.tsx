import styled from 'styled-components';
import { Layout } from '../layout';
import { BackButton } from '../layout/BackButton';
import { CardRegisterForm } from '../components/CardRegisterForm';

export const Register = () => {
  return (
    <Layout>
      <Style.Header>
        <BackButton path='/' />
        <Style.Title>카드추가</Style.Title>
      </Style.Header>
      <CardRegisterForm />
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
  Title: styled.span`
    margin-left: 8px;

    font-size: 16px;
  `,
};
