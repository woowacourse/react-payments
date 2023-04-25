import { Routes, Route } from 'react-router-dom';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';
import { CardListProvider } from './context/CardListProvider';

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
