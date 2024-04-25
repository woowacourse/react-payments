import * as S from '../confirmPage.style';

type CompleteTextProps = {
  cardNumbers: string;
  cardIssuer: string;
};

export default function CompleteText({ cardNumbers, cardIssuer }: CompleteTextProps) {
  return (
    <S.TextContainer>
      <S.Text>{cardNumbers}로 시작하는 </S.Text>
      <S.Text>{cardIssuer}가 등록 되었어요.</S.Text>
    </S.TextContainer>
  );
}
