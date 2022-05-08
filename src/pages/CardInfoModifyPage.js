import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { FlexWrapper, InputBasic, Layout } from '../components/common/styled';
import { initialCardInfo } from '../constants/card';

export const CardInfoModifyPage = ({ cardInfo = initialCardInfo }) => {
  return (
    <Style.ModifyPageLayout>
      <Style.CardWrapper>
        <Style.Message>카드 등록이 완료되었습니다!</Style.Message>
        <Card size="lg" cardInfo={cardInfo} />
        <Style.ModifyCardNameInput />
      </Style.CardWrapper>
      <Style.ButtonWrapper>
        <Button>확인</Button>
      </Style.ButtonWrapper>
    </Style.ModifyPageLayout>
  );
};

const Style = {
  ModifyPageLayout: styled(Layout)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Message: styled.h1`
    font-size: 22px;
    font-weight: unset;
  `,
  CardWrapper: styled(FlexWrapper)`
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  `,
  ModifyCardNameInput: styled(InputBasic)`
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 90%;
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
