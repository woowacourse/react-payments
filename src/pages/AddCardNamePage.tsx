import { useLocation, useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import InputGroup from '../components/InputGroup';
import { useCardDispatch, useCardState } from '../context/CardContext';
import styled from 'styled-components';
import { useState } from 'react';

const AddCardNamePage = () => {
  const { state } = useLocation();
  const cardList = useCardState();
  const [cardName, setCardName] = useState(['']);
  const setCard = useCardDispatch();
  const navigate = useNavigate();
  const currentCard = cardList.find((card) => card.id === state.cardID);

  if (!currentCard) return <></>;

  const onChangeState =
    (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) =>
    (index: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetId = Number(index);
      const nextState = state.map((value, index) => (index === targetId ? e.target.value : value));

      setState(nextState);
    };

  const successSubmit = () => {
    const targetId = state.cardID;
    const nextState = cardList.map((value) =>
      value.id === targetId ? { ...value, cardName } : value,
    );

    setCard(nextState);
    navigate('/');
  };

  return (
    <AddCardNameLayout>
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
          autofocus={false}
          inputInfoList={[
            {
              type: 'text',
              placeholder: '카드 별칭을 입력해주세요.',
              minLength: 0,
              maxLength: 30,
              width: '242px',
              center: true,
              value: cardName[0],
              onChange: onChangeState(cardName, setCardName),
            },
          ]}
        />
        <StyledSubmitButton type="submit">확인</StyledSubmitButton>
      </StyledForm>
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
  font-size: 24px;
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

const StyledSubmitButton = styled.button`
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
