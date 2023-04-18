import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import CardRegistration from '../pages/CardRegistration';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/card-registration',
    element: <CardRegistration />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
