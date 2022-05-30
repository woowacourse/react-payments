import { forwardRef } from 'react';
import * as S from './Input.styled';

const Input = forwardRef((props, ref) => {
  return <S.Input ref={ref} {...props} />;
});

export default Input;
