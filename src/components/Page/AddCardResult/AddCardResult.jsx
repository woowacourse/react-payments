import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NextButton from '../../Button';
import Card from '../../Card';
import CardNickNameInput from '../../Input/CardNickNameInput';

const Container = styled.div`
  display: flex;
  width: 375px;
  height: 701px;
  flex-direction: column;
  position: relative;
`;

const TitleWrapper = styled.div`
  margin-top: 130px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const CardWrapper = styled.div`
  margin-top: 77px;
`;

const CardNickNameInputWrapper = styled.div`
  text-align: center;
  margin-top: 33px;
`;
const NextButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const AddCardResultPage = () => {
  return (
    <Container>
      <TitleWrapper>카드 등록이 완료되었습니다.</TitleWrapper>
      <CardWrapper>
        <Card
          name={'샐리'}
          expiredMonth={'12'}
          expiredYear={'23'}
          cardNumbers={['1111', '2222', '3333', '4444']}
          cardInfo={{ color: 'red', name: '포코 카드' }}
          size={'large'}
        />
      </CardWrapper>
      <CardNickNameInputWrapper>
        <CardNickNameInput />
      </CardNickNameInputWrapper>
      <NextButtonWrapper>
        <Link to="/react-payments/list">
          <NextButton name="confirmButton">확인</NextButton>
        </Link>
      </NextButtonWrapper>
    </Container>
  );
};

export default AddCardResultPage;
