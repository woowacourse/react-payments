import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardFormPages from './pages/CardFromPages';
import CardRegistrationComplete from './pages/CardRegistrationComplete';

function App() {
  return (
    <>
      <BrowserRouter basename="/react-payments">
        <Routes>
          <Route path="/" element={<CardFormPages />} />
          <Route path="/complete" element={<CardRegistrationComplete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
