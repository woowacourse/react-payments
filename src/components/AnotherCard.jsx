import React from 'react';

import * as S from 'styles.js';

export default function AnotherCard({ onClick }) {
  return (
    <S.CardAlignBox onClick={onClick}>
      <S.Card isSmall={true} color={'#e5e5e5'}>
        <S.Sign>{'+'}</S.Sign>
      </S.Card>
    </S.CardAlignBox>
  );
}
