import React from 'react';
import styled from 'styled-components';
import { LABEL_PRIMARY_COLOR } from '../../theme';
import * as CommonStyle from './styles';

const Paragraph = styled.p`
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: ${LABEL_PRIMARY_COLOR};
`;

const S = {
  ...CommonStyle,
  Paragraph,
};

function LetterCounter({ currentLength, maxLength }) {
  return (
    <S.Paragraph>
      <S.Span padding={'0'}>{currentLength || 0}</S.Span>
      <S.Span padding={'0'}>/</S.Span>
      <S.Span padding={'0'}>{maxLength || 0}</S.Span>
    </S.Paragraph>
  );
}

export default LetterCounter;
