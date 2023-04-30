import { Outlet, Navigate } from 'react-router-dom';

import useCardFormValue from '../../../hooks/useCardFormValue';
import useCardFormValidation from '../../../hooks/useCardFormValidation';
import { isValidExpiredDate } from '../../../utils/validation';

const CardInfoRequired = () => {
  const {
    company,
    expiredDate: { month, year },
  } = useCardFormValue();
  const { isValidCardData } = useCardFormValidation();

  if (
    !company ||
    !isValidExpiredDate(Number(month), Number(year)) ||
    !isValidCardData
  )
    return <Navigate to="/" replace />;

  return <Outlet />;
};

export default CardInfoRequired;
