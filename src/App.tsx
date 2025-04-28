import { RouterProvider } from 'react-router';
import { router } from './app/routes/routes';
import { CardInfoProvider } from './features/cardInfo/context/CardInfoContext';

function App() {
  return (
    <CardInfoProvider>
      <RouterProvider router={router} />
    </CardInfoProvider>
  );
}

export default App;
