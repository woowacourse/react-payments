import { Routes, Route } from 'react-router-dom';
import { CardListProvider } from './CardListContext';
import CardRegistration from './pages/CardRegistration/CardRegistration';
import Home from './pages/Home';

function App() {
  return (
    <CardListProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<CardRegistration />} />
      </Routes>
    </CardListProvider>
  );
}

export default App;
