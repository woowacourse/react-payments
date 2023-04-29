import { Outlet } from 'react-router-dom';
import CardFormProvider from '../../../contexts/CardFormContext';

const CardPage = () => {
  return (
    <CardFormProvider>
      <Outlet />
    </CardFormProvider>
  );
};

export default CardPage;
