import GlobalStyles from './GlobalStyles';
import router from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
