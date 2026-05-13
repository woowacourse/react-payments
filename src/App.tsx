import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
import CardRegisterCompletePage from './feature/CardRegisterComplete/CardRegisterCompletePage';

const App = () => (
  <PhoneFrame>
    <Routes>
      <Route path='/' element={<CardRegisterPage />} />
      <Route path='/complete' element={<CardRegisterCompletePage />} />
    </Routes>
  </PhoneFrame>
);

const PhoneFrame = styled.div`
  width: 390px;
  height: 700px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export default App;
