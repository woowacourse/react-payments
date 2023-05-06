import { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCardDispatch, useCardState } from '../context/CardListContext';
import InputGroup from '../components/common/InputGroup';
import CardPreview from '../components/payments/CardPreview';
import { PAGE_PATH } from '../constants';

const AddCardNamePage = () => {
  const { state } = useLocation() as { state: { cardID: string } | undefined };
  const cardList = useCardState();
  const [cardName, setCardName] = useState('');
  const setCard = useCardDispatch();
  const navigate = useNavigate();
  const currentCard = cardList.find((card) => card.id === state?.cardID);

  const successSubmit = () => {
    const targetId = currentCard?.id;
    const nextState = cardList.map((value) =>
      value.id === targetId ? { ...value, cardName } : value,
    );

    setCard(nextState);
    navigate(PAGE_PATH.HOME);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleClickHomeButton = () => {
    navigate(PAGE_PATH.HOME);
  };

  return (
    <AddCardNameLayout>
      {currentCard ? (
        <>
          <AddCardMessage>카드등록이 완료되었습니다.</AddCardMessage>
          <CardPreview
            cardCompany={currentCard.cardCompany}
            cardNumbers={currentCard.cardNumbers}
            cardOwner={currentCard.cardOwner}
            cardExpirationDate={currentCard.cardExpirationDate}
          />
          <StyledForm onSubmit={successSubmit}>
            <InputGroup
              labelText=""
              autoMoveFocus={false}
              inputInfoList={[
                {
                  type: 'text',
                  placeholder: '카드 별칭을 입력해주세요.',
                  minLength: 0,
                  maxLength: 30,
                  width: '242px',
                  center: true,
                  value: cardName,
                  onChange: handleChange,
                },
              ]}
            />
            <StyledSubmitButton type="submit">확인</StyledSubmitButton>
          </StyledForm>
        </>
      ) : (
        <ErrorMessageLayout>
          <p>잘못된 페이지 접근입니다.</p>
          <HomeButton onClick={handleClickHomeButton}>홈으로 이동하기</HomeButton>
        </ErrorMessageLayout>
      )}
    </AddCardNameLayout>
  );
};

const AddCardNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const AddCardMessage = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #383838;
  margin-bottom: 36px;
`;

const StyledForm = styled.form`
  margin-top: 60px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledSubmitButton = styled.button`
  align-self: end;
  border: none;
  background-color: transparent;
  margin-top: 4px;
  padding: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

const ErrorMessageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const HomeButton = styled.button`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
`;

export default AddCardNamePage;
