import { memo } from 'react';
import * as styled from './index.styled';

const DotMark = () => {
  return <styled.Container>•</styled.Container>;
};

export default memo(DotMark);
