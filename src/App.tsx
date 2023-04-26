import MyCard from './pages/MyCard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddCard from './pages/AddCard';
import ModalContextProvider from './store/modalContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyCard />,
  },
  {
    path: '/AddCard',
    element: <AddCard />,
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
