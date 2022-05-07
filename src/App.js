import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Loading, AddCard, RegisterCard, CardList, NotFound } from './pages';
import { PATH } from './constant';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.ADD_CARD} exact element={<AddCard />} />
          <Route path={PATH.REGISTER_CARD} exact element={<RegisterCard />} />
          <Route path={PATH.HOME} exact element={<CardList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display:flex;
    justify-content:center;
  }

  #root {
    display: flex;
    width: 500px;
    flex-direction:column;
    justify-content:center;

  }


`;

export default App;
