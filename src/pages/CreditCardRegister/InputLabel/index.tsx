import * as S from './style';

type InputLabelType = {
  label: string;
};

function InputLabel({ label }: InputLabelType) {
  return <S.LabelWrapper>{label}</S.LabelWrapper>;
}

export default InputLabel;
