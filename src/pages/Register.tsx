import styled from 'styled-components';
import { AddNewCardForm } from '../components/AddNewCardForm';
import { Layout } from '../layout';
import { BackButton } from '../layout/BackButton';
import { useRef } from 'react';

export const Register = () => {
  return (
    <Layout>
      <Style.Header>
        <BackButton path="/" />
        <Style.Title>카드추가</Style.Title>
      </Style.Header>
      <AddNewCardForm />
    </Layout>
  );
};

const Style = {
  Header: styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 25px;
  `,
  Title: styled.span`
    font-size: 16px;

    margin-left: 18px;
  `,
};
