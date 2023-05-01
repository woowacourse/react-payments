import { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCardDispatch, useCardState } from '../context/CardListContext';
import InputGroup from '../components/common/InputGroup';
import CardPreview from '../components/payments/CardPreview';
import useAddCardForm from '../hooks/useAddCardForm';
import { PAGE_PATH } from '../constants';

const AddCardNamePage = () => {
  const { state } = useLocation();
  const cardList = useCardState();
  const [cardName, setCardName] = useState('');
  const setCard = useCardDispatch();
  const navigate = useNavigate();
  const { onChangeState } = useAddCardForm();
  const currentCard = cardList.find((card) => card.id === state.cardID);

  const successSubmit = () => {
    const targetId = state.cardID;
    const nextState = cardList.map((value) =>
      value.id === targetId ? { ...value, cardName } : value,
    );

    setCard(nextState);
    navigate(PAGE_PATH.HOME);
  };

  return (
    <AddCardNameLayout>
      {currentCard && (
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
                  onChange: onChangeState('text')(setCardName),
                },
              ]}
            />
            <StyledSubmitButton type="submit">확인</StyledSubmitButton>
          </StyledForm>
        </>
      )}
    </AddCardNameLayout>
  );
};

const AddCardNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const AddCardMessage = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #383838;
  margin-bottom: 36px;
`;

const StyledForm = styled.form`
  margin-top: 124px;
  height: 240px;
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

export default AddCardNamePage;
