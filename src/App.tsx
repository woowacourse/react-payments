import PaymentWidget from "./components/PaymentWidget";
import styled from "@emotion/styled";

function App() {
  return (
    <AppWrapper>
      <PaymentWidget />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

export default App;
