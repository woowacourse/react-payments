import React from 'react';
import { CardShape } from '../components';
import * as S from '../components/common/styles';

function CardAddComplete() {
  return (
    <>
      <CardShape />
      <S.InputWrapperForm>
        <S.Span>
          <S.Input />
        </S.Span>
      </S.InputWrapperForm>
    </>
  );
}

export default CardAddComplete;
