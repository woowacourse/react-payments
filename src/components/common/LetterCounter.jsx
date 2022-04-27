import React from 'react';
import styled from 'styled-components';
import { Span } from '.';

// TODO: 스타일
const Paragraph = styled.p``;

function LetterCounter({ currentLength, maxLength }) {
  return (
    <Paragraph>
      <Span>{currentLength || 0}</Span>
      <Span>/</Span>
      <Span>{maxLength || 0}</Span>
    </Paragraph>
  );
}

export default LetterCounter;
