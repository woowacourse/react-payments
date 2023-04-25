import * as S from './style';

export type ButtonProps = {
  text: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
  handleClick: () => void;
};

function Button({ disabled, text, type, handleClick }: ButtonProps) {
  return (
    <S.Button disabled={disabled} type={type} onClick={handleClick}>
      {text}
    </S.Button>
  );
}

export default Button;
