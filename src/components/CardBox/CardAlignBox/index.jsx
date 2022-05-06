import React from 'react';
import styled from 'styled-components';

export default function CardAlignBox({ children }) {
  return <Styled.CardAlignBox>{children}</Styled.CardAlignBox>;
}

const Styled = {
  CardAlignBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};
