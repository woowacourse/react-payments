import { Card } from "./components/Card.tsx";
import { CardForm } from "./components/form/CardForm.tsx";
import styled from "@emotion/styled";

function App() {
  return (
    <AppContainer>
      <Card />
      <CardForm />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
