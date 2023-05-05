import * as S from './style';

function LoadingSpinner({ label }: { label?: string }) {
  return (
    <>
      <S.LoadingSpinnerWrapper>
        <S.LoadingSpinner />
      </S.LoadingSpinnerWrapper>
      <S.LoadingSpinnerWrapper>
        <div>{label}</div>
      </S.LoadingSpinnerWrapper>
    </>
  );
}
export default LoadingSpinner;
