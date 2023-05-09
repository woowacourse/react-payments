import MyCard from './pages/MyCard';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import AddCard from './pages/AddCard';
import NameCard from './pages/NameCard';
import { ModalContextProvider } from 'react-modal-patrick';
import NotFound from './pages/NotFound';

const router = createHashRouter([
  {
    path: '/',
    element: <MyCard />,
  },
  {
    path: '/AddCard',
    element: <AddCard />,
  },
  {
    path: '/CardName',
    element: <NameCard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <ModalContextProvider>
      <RouterProvider router={router} />;
    </ModalContextProvider>
  );
};

export default App;
