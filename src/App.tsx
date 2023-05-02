import MyCard from './pages/MyCard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddCard from './pages/AddCard';
import RegisterCardName from './pages/RegisterCardName';
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
  {
    path: '/CardName',
    element: <RegisterCardName />,
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
