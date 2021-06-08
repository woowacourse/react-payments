import React, { useContext, useState } from 'react';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { NickNameForm } from '../../../InputForm/NickNameForm';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider.js';

/**
 * Primary UI component for user interaction
 */

export const CardRegistered = () => {
  const { cards, cardId, setCurrentPage, updateCard } = useContext(PaymentContext);
  const { company, numbers, owner, validDay, nickName } = cards[cardId];
  const [newNickName, setNickName] = useState(nickName);

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const submitCardNickName = (e) => {
    e.preventDefault();

    updateCard(newNickName);
    setCurrentPage('cardList');
  };

  return (
    <>
      <Styled.MessageContainer>{'카드의 닉네임을 입력해주세요.'}</Styled.MessageContainer>
      <Styled.CardPreviewContainer>
        <Card
          size={'large'}
          company={company}
          numbers={numbers}
          owner={owner}
          validDay={validDay}
        />
      </Styled.CardPreviewContainer>
      <Styled.CardNickNameFormContainer>
        <NickNameForm
          nickName={{ value: newNickName, handleChange: handleNickNameChange }}
          submitCardNickName={submitCardNickName}
        />
      </Styled.CardNickNameFormContainer>
    </>
  );
};
