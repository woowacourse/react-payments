import { RouterProvider } from 'react-router-dom';
import router from 'router';
import CardFormProvider from 'providers/CardFormProvider';

function Providers() {
  return (
    <CardFormProvider>
      <RouterProvider router={router} />
    </CardFormProvider>
  );
}
export default Providers;
