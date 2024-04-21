import * as S from "./style";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return <S.ErrorMessage>{message}</S.ErrorMessage>;
}
