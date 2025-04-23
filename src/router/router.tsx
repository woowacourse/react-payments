import {createBrowserRouter, RouterProvider} from 'react-router';
import Main from '../page/main';
import Confirm from '../page/confirm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/confirm',
    element: <Confirm />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
