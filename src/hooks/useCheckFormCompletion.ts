import { useEffect } from 'react';

import { PATHNAME } from '../constants/pathname';
import { useIsFilledForm } from './useIsFilledForm';
import { useNavigationTo } from './useNavigationTo';

export const useCheckFormCompletion = () => {
  const isFilled = useIsFilledForm();
  const { navigationTo } = useNavigationTo();
  useEffect(() => {
    if (isFilled) {
      return;
    }

    navigationTo(PATHNAME.HOME);
  }, []);
};
