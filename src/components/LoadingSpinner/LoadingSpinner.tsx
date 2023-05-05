import { LOADING_SPINNER } from '../../types/Image';
import * as Styled from './LoadingSpinner.styles';

export const LoadingSpinner = () => {
  return (
    <Styled.SectionWrapper>
      <Styled.LoadingSpinnerWrapper src={LOADING_SPINNER} alt="로딩 스피너" />
      <Styled.LoadingText>입력하신 카드를 등록 중이에요.</Styled.LoadingText>
      <Styled.LoadingText>잠시만 기다려주세요.</Styled.LoadingText>
    </Styled.SectionWrapper>
  );
};
