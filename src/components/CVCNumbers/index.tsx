import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

const CVCNumbers = () => {
  return (
    <CVCNumbersContainer>
      <InputLabels title="CVC 번호를 입력해 주세요" />
      <InputTexts label="CVC" placeholder={['123']} />
    </CVCNumbersContainer>
  );
};
export default CVCNumbers;

const CVCNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;
