import * as S from './style';

export interface LoadingSpinnerProps { label?: string }

function LoadingSpinner({ label }: LoadingSpinnerProps) {
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
