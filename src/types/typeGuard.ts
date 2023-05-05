import { PAGE_TITLE, PageTitle } from '../constants/pathname';

export const isPageTitleKey = (value: unknown): value is keyof PageTitle => {
  const pathname = value as PageTitle;

  return pathname && typeof pathname === 'string' && pathname in PAGE_TITLE;
};
