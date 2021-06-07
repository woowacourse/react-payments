import React, { useContext, useState } from 'react';

import { Card } from '../../../Card';
import { NickNameForm } from '../../../InputForm/NickNameForm';

import { GUIDE_MESSAGES } from '../../../../utils/constants/messages.js';
import { CARD_NAME_BIRDS } from '../../../../utils/constants/card.js';

import { CardContext } from '../../../../contexts/CardContextProvider.js';
import { PageContext } from '../../../../contexts/PageContextProvider.js';

import * as Styled from './style.js';

export const CardRegistered = () => {
  const { addCard, currentCard } = useContext(CardContext);
  const { setCurrentPage } = useContext(PageContext);

  const { company, numbers, owner, validDay, nickName } = currentCard;
  const [newNickName, setNewNickName] = useState(
    nickName
      ? nickName
      : `${owner ? owner : CARD_NAME_BIRDS[Math.floor(Math.random() * 11)]}의 ${company}카드`
  );

  const handleNickNameChange = (e) => {
    setNewNickName(e.target.value);
  };

  const submitCardNickName = (e) => {
    e.preventDefault();

    addCard({ ...currentCard, nickName: newNickName });
    setCurrentPage('cardList');
  };

  return (
    <Styled.PageContainer>
      <Styled.MessageContainer>
        <h1>{GUIDE_MESSAGES.CARD_REGISTERED}</h1>
      </Styled.MessageContainer>
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
          nickName={{
            value: newNickName,
            handleChange: handleNickNameChange,
          }}
          submitCardNickName={submitCardNickName}
        />
      </Styled.CardNickNameFormContainer>
    </Styled.PageContainer>
  );
};
