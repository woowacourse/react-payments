import LoadingSpinner from '../@common/LoadingSpinner';
import * as Styled from './AddCardLoadingSpinner.styles';

const AddCardLoadingSpinner = () => {
  return (
    <Styled.SectionWrapper>
      <Styled.LoadingSpinnerWrapper>
        <LoadingSpinner />
      </Styled.LoadingSpinnerWrapper>
      <Styled.LoadingText>입력하신 카드를 등록 중이에요.</Styled.LoadingText>
      <Styled.LoadingText>잠시만 기다려주세요.</Styled.LoadingText>
    </Styled.SectionWrapper>
  );
};

export default AddCardLoadingSpinner;
