import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

const ExpirationPeriod = () => {
  return (
    <ExpirationPeriodContainer>
      <InputLabels
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputTexts label="유효기간" placeholder={['MM', 'YY']} />
    </ExpirationPeriodContainer>
  );
};
export default ExpirationPeriod;

const ExpirationPeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
