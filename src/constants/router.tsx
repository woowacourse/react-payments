import { AddCardPage } from '@pages/AddCardPage';
import { HomePage } from '@pages/HomePage';
import { RegisterCardPage } from '@pages/RegisterCardPage.tsx';
import { PAGE_KIND } from './constant';

export const ROUTER = {
  [PAGE_KIND.HOME]: <HomePage />,
  [PAGE_KIND.ADD_CARD]: <AddCardPage />,
  [PAGE_KIND.REGISTER_CARD]: <RegisterCardPage />,
};
