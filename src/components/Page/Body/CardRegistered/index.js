import React, { useContext, useState } from 'react';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { NickNameForm } from '../../../InputForm/NickNameForm';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider.js';

/**
 * Primary UI component for user interaction
 */
const birds = [
  '직박구리',
  '두루미',
  '할미새사촌',
  '가마우지',
  '논병아리',
  '해오라기',
  '메추라기',
  '닭',
  '꿩',
  '딱따구리',
  '느시',
];

export const CardRegistered = () => {
  const { card, setCurrentPage, registerCard } = useContext(PaymentContext);
  const { company, numbers, owner, validDay } = card;
  const [nickName, setNickName] = useState(
    `${owner ? owner : birds[Math.floor(Math.random() * 11)]}의 ${company}카드`
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
          nickName={{ value: nickName, handleChange: handleNickNameChange }}
          submitCardNickName={submitCardNickName}
        />
      </Styled.CardNickNameFormContainer>
    </>
  );
};
