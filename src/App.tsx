import { createBrowserRouter, RouterProvider } from 'react-router';
import AddCardPage from './pages/AddCardPage.tsx';
import AddCardCompletePage from './pages/AddCardCompletePage.tsx';
import { ROUTES } from './constants.ts';
import './App.css';

const router = createBrowserRouter(
  [
    {
      path: ROUTES.ADD_CARD,
      element: <AddCardPage />,
    },
    {
      path: ROUTES.ADD_CARD_COMPLETE,
      element: <AddCardCompletePage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
