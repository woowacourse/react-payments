import { useLocation, useNavigate } from 'react-router-dom';

import { PAGE_TITLE, PATHNAME } from '../constants/pathname';
import { isPageTitleKey } from '../types/typeGuard';

export const useHeader = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();

  const isOnHomePage = pathname === PATHNAME.HOME;

  const onClickBackward = () => {
    navigation('/');
  };

  const pageTitle = isPageTitleKey(pathname) ? PAGE_TITLE[pathname] : '404';

  return { isOnHomePage, onClickBackward, pageTitle };
};
