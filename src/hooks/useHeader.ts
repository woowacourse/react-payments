import { useLocation } from 'react-router-dom';

import { PAGE_TITLE, PATHNAME } from '../constants/pathname';
import { isPageTitleKey } from '../types/typeGuard';

export const useHeader = () => {
  const { pathname } = useLocation();

  const shouldRenderBackwardBox = pathname === PATHNAME.REGISTER;

  const pageTitle = isPageTitleKey(pathname)
    ? PAGE_TITLE[pathname]
    : '오류 페이지';

  return { shouldRenderBackwardBox, pageTitle };
};
