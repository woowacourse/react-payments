import { Outlet } from 'react-router-dom';

import CardFormProvider from '../../../contexts/CardFormContext';

const CardFormContext = () => {
  return (
    <CardFormProvider>
      <Outlet />
    </CardFormProvider>
  );
};

export default CardFormContext;
