import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import NewCardInputPage from './pages/NewCardInputPage';

import AppLayout from './components/layout/AppLayout';

import GlobalStyle from './styles/global';
import './App.css';
import CardSubmitPage from './pages/CardSubmitPage';
import { URL } from './constants/card-app';

const router = createBrowserRouter([
  {
    path: URL.defaultPage,
    element: (
      <AppLayout>
        <NewCardInputPage />
      </AppLayout>
    ),
  },
  {
    path: URL.submitPage,
    element: (
      <AppLayout>
        <CardSubmitPage />
      </AppLayout>
    ),
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
