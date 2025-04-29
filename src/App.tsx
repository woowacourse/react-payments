import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
