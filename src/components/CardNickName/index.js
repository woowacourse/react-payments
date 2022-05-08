import styled from 'styled-components';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { InputBasic } from '../common/styled';
import { initialCardInfo } from '../../constants/card';

export const CardNickName = ({
  cardInfo = initialCardInfo,
  message = '카드 등록이 완료되었습니다!',
}) => {
  return (
    <>
      <Style.CardWrapper>
        <Style.Message>{message}</Style.Message>
        <Card size="lg" cardInfo={cardInfo} />
        <Style.ModifyCardNameInput />
      </Style.CardWrapper>
      <Style.ButtonWrapper>
        <Button>확인</Button>
      </Style.ButtonWrapper>
    </>
  );
};

const Style = {
  Message: styled.h1`
    font-size: 22px;
    font-weight: unset;
    margin-bottom: 5rem;
  `,
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  `,
  ModifyCardNameInput: styled(InputBasic)`
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 80%;
    border-radius: 0;
    color: black;
    margin-top: 15px;
  `,
  ButtonWrapper: styled.div`
    margin-top: 5rem;
    width: 100%;
    text-align: right;
  `,
};
