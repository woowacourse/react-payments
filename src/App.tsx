import styled from 'styled-components';
import CardPreview from './CardPreview';

import CardNumberInputField from './InputField/CardNumberInputField';
import InputSection from './InputSection';
import ExpirationDateInputField from './InputField/ExpirationDateInputField';
import CVCInputField from './InputField/CVCInputField';

const PaymentsLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;

function App() {
  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview />
        <InputSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputField />
        </InputSection>
        <InputSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpirationDateInputField />
        </InputSection>
        <InputSection title="CVC 번호를 입력해 주세요">
          <CVCInputField />
        </InputSection>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

export default App;
