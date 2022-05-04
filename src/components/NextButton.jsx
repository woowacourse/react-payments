import React from 'react';
import * as S from '../styles.js';

export default function NextButton({ onClick, disabled, children, color }) {
  return (
    <S.NextButtonBox>
      <S.NextButton color={color} onClick={onClick} disabled={disabled}>
        {children}
      </S.NextButton>
    </S.NextButtonBox>
  );
}
