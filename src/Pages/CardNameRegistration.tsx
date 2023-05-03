import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardLoadingScreen from '../components/CardLoadingScreen';
import TransParentButton from '../components/Common/Button/TransParentButton';
import Card from '../components/Common/Card';
import Input from '../components/Common/Input';
import MainLayout from '../components/Common/Layout/MainLayout';
import { PAGE_PATH } from '../constants';
import { useCardInformationStore } from '../context/CardInformationProvider';
import { useCardListStore } from '../context/CardListProvider';

function CardNameRegistration() {
  const { dispatchCardList } = useCardListStore();
  const { card, setCardName, resetCardInformation } = useCardInformationStore();
  const [isShowLoadingScreen, setIsShowLoadingScreen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const closeLoadingScreen = () => {
    setTimeout(() => {
      setIsShowLoadingScreen(false);
      navigate(PAGE_PATH.HOME);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsShowLoadingScreen(true);
    e.preventDefault();
    dispatchCardList(card);
    resetCardInformation();
    closeLoadingScreen();
  };

  return (
    <>
      <MainLayout>
        <StyledMessage>카드 등록이 완료 되었습니다.</StyledMessage>
        <Card cardInformation={card} isAddForm />
        <StyledForm onSubmit={handleSubmit}>
          <Input type="text" textAlign="center" onChange={handleChange} resetStyle />
          <TransParentButton type="submit">확인</TransParentButton>
        </StyledForm>
      </MainLayout>
      <CardLoadingScreen message="카드를 등록중입니다." isShow={isShowLoadingScreen} />
    </>
  );
}

const StyledMessage = styled.h3`
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 36px;
  margin-top: 130px;
`;

const StyledForm = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 124px 12px 0 12px;
  width: 318px;
  height: 296px;
  justify-content: space-between;

  & > input {
    width: 90%;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 6px;

    border-bottom: 2px solid #727272;
  }

  & > button {
    position: absolute;
    right: 0px;
    bottom: 0px;

    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }
`;

export default CardNameRegistration;
