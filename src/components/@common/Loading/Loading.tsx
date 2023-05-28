import React, { PropsWithChildren } from 'react';
import * as Styled from './Loading.styles';

export default function Loading({ children }: PropsWithChildren) {
  return (
    <Styled.Root>
      <Styled.Loader>
        <Styled.Border1 />
        <Styled.Border2 />
        <Styled.Border3 />
        <Styled.Text>{children}</Styled.Text>
      </Styled.Loader>
    </Styled.Root>
  );
}
