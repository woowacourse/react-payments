import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import CardRegistration from '../pages/CardRegistration';
import styles from './App.module.css';

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
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
