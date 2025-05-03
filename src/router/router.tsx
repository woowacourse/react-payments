import {createBrowserRouter, RouterProvider} from 'react-router';
import Main from '../page/main';
import Confirm from '../page/confirm';
import PATH from './path';

const router = createBrowserRouter(
  [
    {
      path: PATH.MAIN,
      element: <Main />,
    },
    {
      path: PATH.CONFIRM,
      element: <Confirm />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
