import { PropsWithChildren } from 'react';
import * as S from './style';

function Box({ children }: PropsWithChildren) {
  return (
    <S.Box>
      {children}
    </S.Box>
  );
}

export default Box;
