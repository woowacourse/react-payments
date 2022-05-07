import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Loading, AddCard, RegisterCard } from './pages';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<AddCard />} />
          <Route path="/registerCard" exact element={<RegisterCard />} />
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
  }

  #root {
    display: flex;
    justify-content: center;
  }

  main {
    width: fit-content;
    height: fit-content;
    padding: 10px;
  }


`;

export default App;
