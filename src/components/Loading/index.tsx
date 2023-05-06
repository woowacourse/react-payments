import * as S from './style';

function Loading({ explanation, delayTime }: { explanation: string; delayTime: number }) {
  return (
    <S.Layout>
      <S.LoadingBar>
        <S.LoadingBackdrop />
        <S.LoadingProgress delayTime={delayTime} />
      </S.LoadingBar>
      <S.LoadingExplanation>{explanation}</S.LoadingExplanation>
    </S.Layout>
  );
}

export default Loading;
