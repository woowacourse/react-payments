import { Outlet } from 'react-router-dom';
import { CardProvider } from '../../context/CardContext';

const Root = () => {
  return (
    <CardProvider>
      <Outlet />
    </CardProvider>
  );
};

export default Root;
