import { Routes, Route } from 'react-router-dom';
import CardNameRegistration from './Pages/CardNameRegistration';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';
import { CardInformationProvider } from './context/CardInformationProvider';
import { CardListProvider } from './context/CardListProvider';

function App() {
  return (
    <CardListProvider>
      <CardInformationProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<CardRegistration />} />
          <Route path="/registration/complete" element={<CardNameRegistration />} />
        </Routes>
      </CardInformationProvider>
    </CardListProvider>
  );
}

export default App;
