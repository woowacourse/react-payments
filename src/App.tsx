import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnrollCard from './page/EnrollCard';
import './reset.css';
import CardRegistrationConfirmation from './page/CardRegistrationConfirmation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <EnrollCard/>} />
          <Route path="/CardRegistrationConfirmation" element={<CardRegistrationConfirmation />}>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
