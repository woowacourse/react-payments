import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NewCardInputPage from './pages/NewCardInputPage';

import AppLayout from './components/layout/AppLayout';

import GlobalStyle from './styles/global';
import './App.css';
import CardSubmitPage from './pages/CardSubmitPage';
import { URL } from './constants/card-app';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <NewCardInputPage />,
    },
    {
      path: '/submit',
      element: <CardSubmitPage />,
    },
    {
      path: '/error',
      element: <ErrorPage />,
    },
    {
      path: '/*',
      element: <ErrorPage />,
    },
  ],
  { basename: URL.defaultPage }
);

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </>
  );
}

export default App;
