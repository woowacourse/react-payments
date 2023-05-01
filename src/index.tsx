import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage';
import AddCardPage from './pages/AddCardPage';
import AddCardNamePage from './pages/AddCardNamePage';
import { PAGE_PATH } from './constants';
import GlobalStyle from './styles/global';

const router = createBrowserRouter([
  {
    path: PAGE_PATH.HOME,
    element: <App />,
    children: [
      {
        path: '',
        element: <MyCardPage />,
      },
      {
        path: PAGE_PATH.ADD_CARD,
        element: <AddCardPage />,
      },
      {
        path: PAGE_PATH.ADD_CARD_NAME,
        element: <AddCardNamePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
