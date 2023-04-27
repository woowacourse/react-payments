import { useLocation } from 'react-router-dom';

import { PAGE_TITLE, PATHNAME } from '../constants/pathname';
import { isPageTitleKey } from '../types/typeGuard';

export const useHeaderTitle = () => {
  const { pathname } = useLocation();

  const isOnRegisterPage = pathname === PATHNAME.REGISTER;

  const pageTitle = isPageTitleKey(pathname) ? PAGE_TITLE[pathname] : '404';

  return { isOnRegisterPage, pageTitle };
};
