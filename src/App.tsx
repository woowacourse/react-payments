import styled from 'styled-components';
import CardPreview from './CardPreview';
import InputSection from './InputSection';

const PaymentsLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;

function App() {
  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview />
        <InputSection title="결제할 카드 번호를 입력해 주세요" caption="sdfs">
          <div></div>
        </InputSection>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

export default App;
