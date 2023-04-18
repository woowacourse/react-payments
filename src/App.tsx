import { Routes, Route } from 'react-router-dom';
import CardRegistration from './Pages/CardRegistration';
import Home from './Pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="카드 앱" hasBackHistory />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<CardRegistration />} />
      </Routes>
    </>
  );
}

export default App;
