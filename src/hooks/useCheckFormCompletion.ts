import { useEffect } from 'react';

import { PATHNAME } from '../constants/pathname';
import { useIsFilledForm } from './useIsFilledForm';
import { useNavigationTo } from './useNavigationTo';

export const useCheckFormCompletion = () => {
  const isFilled = useIsFilledForm();
  const { navigationTo } = useNavigationTo(PATHNAME.HOME);
  useEffect(() => {
    if (isFilled) {
      return;
    }

    navigationTo();
  }, []);
};
