import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchCardList(card);
    resetCardInformation();
    navigate(PAGE_PATH.HOME);
  };

  return (
    <MainLayout>
      <StyledMessage>카드 등록이 완료 되었습니다.</StyledMessage>
      <Card cardInformation={card} isAddForm />
      <StyledForm onSubmit={handleSubmit}>
        <Input type="text" textAlign="center" onChange={handleChange} resetStyle />
        <TransParentButton type="submit">확인</TransParentButton>
      </StyledForm>
    </MainLayout>
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
