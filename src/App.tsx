import { Route, Routes } from 'react-router-dom';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletedPage from './pages/CardRegistrationCompletedPage/CardRegistrationCompletedPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CardRegistrationPage />} />
      <Route path="/card-registration-completed" element={<CardRegistrationCompletedPage />} />
    </Routes>
  );
}
