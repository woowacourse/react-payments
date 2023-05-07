import React from 'react';
import * as Styled from './Loading.styles';

export default function Loading() {
  return (
    <Styled.Root>
      <Styled.Loader>
        <Styled.Border1 />
        <Styled.Border2 />
        <Styled.Border3 />
        <Styled.Text>Loading...</Styled.Text>
      </Styled.Loader>
    </Styled.Root>
  );
}
