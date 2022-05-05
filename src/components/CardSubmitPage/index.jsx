import React from 'react';
import styled from 'styled-components';
import { LABEL_PRIMARY_COLOR, PLACEHOLDER_PRIMARY_COLOR } from '../../style';
import Card from '../common/Card';
import Footer from '../common/Footer';
import { Form } from '../common/styled';
import TextButton from '../common/TextButton';

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

const LinedInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 1px solid #000;
  width: 80%;
  font-size: 1.25rem;
  padding: 8px;

  &:focus {
    outline: 1px solid ${PLACEHOLDER_PRIMARY_COLOR};
  }
`;

function CardSubmitPage() {
  return (
    <Form>
      <Title>카드 등록이 완료되었습니다.</Title>
      <Card
        large
        handleClickBox={() => {}}
        cardCompany={{ hexColor: '#f0f', name: '태태 카드' }}
        cardNumber={'1234-1234-****-****'}
        cardOwnerName={'TAETAE'}
        cardDate={{ month: '01', yaer: '27' }}
      />
      <LinedInput type="text" minLength={1} placeholder="카드 별칭" required />
      <Footer>
        <TextButton hexColor={LABEL_PRIMARY_COLOR} isVisible>
          확인
        </TextButton>
      </Footer>
    </Form>
  );
}

export default CardSubmitPage;
