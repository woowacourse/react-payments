import React, { useContext, useState } from 'react';

import { LABEL_PRIMARY_COLOR } from '../../style';

import Card from '../common/Card';
import ErrorMessage from '../common/ErrorMessage';
import Footer from '../common/Footer';
import TextButton from '../common/TextButton';
import { Container, LinedInput, SubmitContainer, Title } from './style';

import { CardListDispatchContext, CardInfoContext, SetPathContext, CardInfoDispatchContext } from '../../context';

function CardSubmitPage({ nextId }) {
  const setPath = useContext(SetPathContext);
  const { cardCompany, cardNumbers, owner, cardDate } = useContext(CardInfoContext);
  const cardInfoDispatch = useContext(CardInfoDispatchContext);
  const cardListDispatch = useContext(CardListDispatchContext);

  const [nickname, setNickname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    const trimmedValue = value.trim();
    setNickname(trimmedValue);
    setErrorMessage('');

    if (!trimmedValue) {
      setErrorMessage('필수로 입력해주세요.');
    }
  };

  const handleClick = () => {
    if (
      !nickname ||
      !owner.name ||
      !cardDate.month ||
      !cardDate.year ||
      !cardCompany.hexColor ||
      !cardCompany.name ||
      Object.values(cardNumbers).join('').length !== 16
    ) {
      return;
    }

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

    cardInfoDispatch({ type: 'RESET_CARD_INFO' });
    setNickname('');
    setPath('list-card');
  };

  return (
    <>
      <SubmitContainer>
        <Title>카드 등록이 완료되었습니다.</Title>
        <Card large cardCompany={cardCompany} cardNumbers={cardNumbers} cardOwner={owner} cardDate={cardDate} />
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
            data-testid="nickname"
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
