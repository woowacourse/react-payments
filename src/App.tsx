import PaymentWidget from "./components/PaymentWidget";
import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrollment from "./components/Enrollment";
import PaymentProvider from "./context/PaymentProvider";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <PaymentProvider>
          <Routes>
            <Route path="/react-payments/" element={<PaymentWidget />}></Route>
            <Route
              path="/react-payments/enrollment"
              element={<Enrollment />}
            ></Route>
          </Routes>
        </PaymentProvider>
      </AppWrapper>
    </BrowserRouter>
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
