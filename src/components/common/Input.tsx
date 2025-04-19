import * as S from './Input.styles';

export interface InputProps extends React.ComponentProps<'input'> {
  isError: boolean;
}

export default function Input({ isError, ...inputAttributesProps }: InputProps) {
  return <S.Input {...inputAttributesProps} isError={isError} />;
}
