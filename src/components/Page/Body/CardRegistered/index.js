import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { Card } from '../../../Card';
import { NickNameForm } from '../../../InputForm/NickNameForm';

/**
 * Primary UI component for user interaction
 */
export const CardRegistered = ({ card, setCurrentPage, updateCardContent, registerCard }) => {
  const { company, numbers, owner, validDay } = card;
  const [nickName, setNickName] = useState(`${owner}의 ${company} 카드`);

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const submitCardNickName = () => {
    updateCardContent({ nickName });
    registerCard();
  };

  return (
    <>
      <Styled.MessageContainer>{'카드 등록이 완료되었습니다.'}</Styled.MessageContainer>
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
          setCurrentPage={setCurrentPage}
          submitCardNickName={submitCardNickName}
        />
      </Styled.CardNickNameFormContainer>
    </>
  );
};

// CardCreateForm.propTypes = {};

// CardCreateForm.defaultProps = {};
