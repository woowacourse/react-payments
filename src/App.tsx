import styled from 'styled-components';

const PaymentsLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentsContainer = styled.div`
  width: 376px;
  height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;

function App() {
  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <h1>React Payments</h1>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

export default App;
