import * as S from './style';
import { InputLabelProps } from './type';

function InputLabel({ label }: InputLabelProps) {
  return <S.LabelWrapper>{label}</S.LabelWrapper>;
}

export default InputLabel;
