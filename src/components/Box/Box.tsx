import * as S from './style';
import * as T from './types';

interface BoxProps extends T.Box {
  children: React.ReactNode;
}

function Box({
  children,
  m, mt, mb, ml, mr, mx, my,
  p, pt, pb, pl, pr, px, py
}: BoxProps) {
  return (
    <S.Box
      m={m}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      mx={mx}
      my={my}
      p={p}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      px={px}
      py={py}
    >
      {children}
    </S.Box>
  );
}

export default Box;
