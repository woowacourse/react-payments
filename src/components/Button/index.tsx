import * as S from './style';
import { ButtonProps } from './type';

function Button({ disabled, text, type, handleClick }: ButtonProps) {
  return (
    <S.Button disabled={disabled} type={type} onClick={handleClick}>
      {text}
    </S.Button>
  );
}

export default Button;
