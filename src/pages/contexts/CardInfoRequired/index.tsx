import { Outlet, Navigate } from 'react-router-dom';

import useCardFormValue from '../../../hooks/useCardFormValue';
import { isValidExpiredDate } from '../../../utils/validation';

const CardInfoRequired = () => {
  const {
    company,
    expiredDate: { month, year },
  } = useCardFormValue();

  if (!company || !isValidExpiredDate(Number(month), Number(year))) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default CardInfoRequired;
