import { useEffect } from "react";
import * as S from "./style";

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  useEffect(() => {}, [message]);

  return <S.ErrorMessage>{message}</S.ErrorMessage>;
}
