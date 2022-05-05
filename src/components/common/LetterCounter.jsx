import React from 'react';
import styled from 'styled-components';
import { LABEL_PRIMARY_COLOR } from '../../style';
import { Span } from './styled';

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

function LetterCounter({ currentLength, maxLength }) {
  return (
    <Paragraph>
      <Span padding="0">{currentLength || 0}</Span>
      <Span padding="0">/</Span>
      <Span padding="0">{maxLength || 0}</Span>
    </Paragraph>
  );
}

export default LetterCounter;
