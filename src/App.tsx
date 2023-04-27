import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AddCard, CardList } from './pages';
import { GlobalStyle } from './styles/global-style';

function App() {
  return (
    <>
      <GlobalStyle />
      <div id='App'>
        <Router>
          <Routes>
            <Route path='/' element={<CardList />}></Route>
            <Route path='/add-card' element={<AddCard />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
