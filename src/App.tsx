import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PATH } from './constants/path';
import CardPreviewInfoProvider from './contexts/cardPreviewInfoProvider';
import { AddCard, AddCardName, CardList } from './pages';
import { GlobalStyle } from './styles/global-style';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div id='App'>
        <Router>
          <Routes>
            <Route path={PATH.CARD_LIST} element={<CardList />}></Route>
            <Route
              path={PATH.ADD_CARD}
              element={
                <CardPreviewInfoProvider>
                  <AddCard />
                </CardPreviewInfoProvider>
              }
            ></Route>
            <Route path={PATH.ADD_CARD_NAME} element={<AddCardName />}></Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
