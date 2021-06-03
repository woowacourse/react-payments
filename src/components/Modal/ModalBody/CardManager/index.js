import React from 'react';
import * as Styled from './style.js';

export const CardManager = ({ handleDeleteCard, handleUpdateCard }) => {
  return (
    <Styled.Container>
      <Styled.DeleteButton onClick={handleDeleteCard}>삭제</Styled.DeleteButton>
      <Styled.UpdateButton onClick={handleUpdateCard}>수정</Styled.UpdateButton>
    </Styled.Container>
  );
};
