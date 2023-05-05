import * as S from './style';

function LoadingSpinner({ label }: { label?: string }) {
  return (
    <div>
      <S.LoadingSpinnerWrapper>
        <S.LoadingSpinner />
      </S.LoadingSpinnerWrapper>
      <S.LoadingSpinnerWrapper>
        <div>{label}</div>
      </S.LoadingSpinnerWrapper>
    </div>
  );
}
export default LoadingSpinner;
