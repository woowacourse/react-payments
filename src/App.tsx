import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
