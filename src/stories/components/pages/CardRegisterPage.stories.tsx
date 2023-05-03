import type { Meta } from '@storybook/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CardInfoProvider } from '../../../context/CardInfoContext';
import { CardListProvider } from '../../../context/CardListContext';
import {
  CardRegisterPage as CardRegisterPageComponent,
  MyCardPage,
} from '../../../components/pages';

export const CardRegisterPage = () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  return (
    <MemoryRouter initialEntries={['/register']}>
      <CardListProvider>
        <CardInfoProvider>
          <Routes>
            <Route path="/" element={<MyCardPage />} />
            <Route path="/register" element={<CardRegisterPageComponent />} />
          </Routes>
        </CardInfoProvider>
      </CardListProvider>
    </MemoryRouter>
  );
};

const meta: Meta<typeof CardRegisterPage> = {
  component: CardRegisterPage,
  title: 'Components/pages',
};

export default meta;
