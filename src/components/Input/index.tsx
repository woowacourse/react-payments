import * as S from './style';

export type InputProps<T> = {
  type: 'string' | 'number' | 'date' | 'datetime';
  value: T,
  width: string,
  textAlign: 'center' | 'start', // 수정 필ㅇ
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

type InputValueType = string | number | readonly string[] | undefined;

function Input<T extends InputValueType>({
  type, value, width, textAlign, onChange
}: InputProps<T>) {
  return (
    <S.Input width={width} textAlign={textAlign} type={type} value={value} onChange={onChange} />
  );
}
export default Input;
