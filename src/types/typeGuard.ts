import { PAGE_TITLE, PageTitle } from '../constants/pathname';

export const isPageTitleKey = (pathname: string): pathname is keyof PageTitle => {
  return pathname in PAGE_TITLE;
};
