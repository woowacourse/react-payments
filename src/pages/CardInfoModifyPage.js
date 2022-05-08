import styled from 'styled-components';
import { CardNickName } from '../components/CardNickName';
import { InputBasic, Layout } from '../components/common/styled';

export const CardInfoModifyPage = () => {
  return (
    <Style.ModifyPageLayout>
      <CardNickName isModify message="수정할 별칭을 입력해주세요!" />
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
  CardWrapper: styled.div`
    display: flex;
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
