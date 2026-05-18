import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentWidget from './components/PaymentWidget';
import CompletePage from './components/completePage/CompletePage';
import styled from '@emotion/styled';

function App() {
  return (
    <AppWrapper>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<PaymentWidget />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </BrowserRouter>
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
