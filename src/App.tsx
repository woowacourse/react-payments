import { Routes, Route } from 'react-router-dom';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<CardRegistration />} />
    </Routes>
  );
}

export default App;
