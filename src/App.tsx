import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import RegisterCard from 'pages/RegisterCard';
import { GlobalStyle } from 'GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
