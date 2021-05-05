import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { NickNameForm } from '../../../InputForm/NickNameForm';
import { GUIDE_MESSAGES } from '../../../../utils/constants/messages.js';
import { CARD_NAME_BIRDS } from '../../../../utils/constants/card.js';

export const CardRegistered = ({ card, setCurrentPage, registerCard }) => {
  const { company, numbers, owner, validDay } = card;
  const [nickName, setNickName] = useState(
    `${owner ? owner : CARD_NAME_BIRDS[Math.floor(Math.random() * 11)]}의 ${company}카드`
  );

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const submitCardNickName = (e) => {
    e.preventDefault();

    registerCard({ ...card, nickName });
    setCurrentPage('cardList');
  };

  return (
    <Styled.PageContainer>
      <Styled.MessageContainer>{GUIDE_MESSAGES.CARD_REGISTERED}</Styled.MessageContainer>
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
          nickName={{ value: nickName, handleChange: handleNickNameChange }}
          submitCardNickName={submitCardNickName}
        />
      </Styled.CardNickNameFormContainer>
    </Styled.PageContainer>
  );
};

CardRegistered.propTypes = {
  card: PropTypes.shape({
    nickName: PropTypes.string,
    company: PropTypes.string, 
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    })
  }), 
  setCurrentPage: PropTypes.func, 
  registerCard: PropTypes.func,
};
