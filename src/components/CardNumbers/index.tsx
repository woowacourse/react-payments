import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

const CardNumbers = () => {
  return (
    <CardNumbersContainer>
      <InputLabels
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        placeholder={['1234', '1234', '1234', '1234']}
      />
    </CardNumbersContainer>
  );
};
export default CardNumbers;

const CardNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;
