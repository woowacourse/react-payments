import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { CardDispatchContext, CardInfoContext } from '../../context';
import { LABEL_PRIMARY_COLOR, PLACEHOLDER_PRIMARY_COLOR } from '../../style';

import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import Footer from '../common/Footer';
import TextButton from '../common/TextButton';

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function CardSubmitPage() {
  const { cardCompany, cardNumbers, owner, cardDate } = useContext(CardInfoContext);
  const cardListDispatch = useContext(CardDispatchContext);

  const nextId = useRef(1);

  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setNickname(value);
    setErrorMessage('');

    if (!value.trim()) {
      setErrorMessage('필수로 입력해주세요.');
    }
  };

  const handleClick = () => {
    if (!nickname.trim()) {
      return;
    }

    // TODO: 페이지 넘어가기, 카드 아이템 리스트 전역으로 추가
    cardListDispatch({
      type: 'ADD_CARD_ITEM',
      card: {
        id: nextId.current,
        cardCompany,
        cardNumbers,
        owner,
        cardDate,
        nickname,
      },
    });

    nextId.current += 1;
    alert('완료 :D');
  };
  return (
    <>
      <SubmitContainer>
        <Title>카드 등록이 완료되었습니다.</Title>
        <Card
          large
          handleClickBox={() => {}}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          cardOwner={owner}
          cardDate={cardDate}
        />
        <Container>
          <LinedInput
            type="text"
            minLength={1}
            maxLength={30}
            placeholder="카드 별칭"
            required
            name="nickname"
            value={nickname}
            onChange={handleInputChange}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </Container>
      </SubmitContainer>
      <Footer>
        <TextButton type="button" hexColor={LABEL_PRIMARY_COLOR} onClick={handleClick} isVisible>
          확인
        </TextButton>
      </Footer>
    </>
  );
}

export default CardSubmitPage;
