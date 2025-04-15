import styled from 'styled-components';
import CardPreview from './CardPreview';

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
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

export default App;
