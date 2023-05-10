import React from "react";
import SpinnerImage from "src/assets/spinner.png";
import { Styled as S } from "./Spinner.styles";

interface Props {
  title?: string;
}

function Spinner({ title }: Props) {
  return (
    <S.Wrapper>
      <S.SpinnerContainer>
        <S.SpinnerImage src={SpinnerImage} alt="spinner-img" />
        <p>{title ?? "로딩중입니다"}</p>
      </S.SpinnerContainer>
    </S.Wrapper>
  );
}

export default Spinner;
