import * as S from './style';

function Loading({
  explanation,
  delayTime,
  backgroundColor,
}: {
  explanation: string;
  delayTime: number;
  backgroundColor: string;
}) {
  return (
    <S.Layout>
      <S.LoadingBar>
        <S.LoadingBackdrop />
        <S.LoadingProgress delayTime={delayTime} backgroundColor={backgroundColor} />
      </S.LoadingBar>
      <S.LoadingExplanation>{explanation}</S.LoadingExplanation>
    </S.Layout>
  );
}

export default Loading;
