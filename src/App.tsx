import "./App.css";
import CardFormPage from "./common/CardFormPage";
import styled from "styled-components";

const BodyDiv = styled.div`
  padding: 200px;
`;

function App() {
  return (
    <BodyDiv>
      <CardFormPage />
    </BodyDiv>
  );
}

export default App;
