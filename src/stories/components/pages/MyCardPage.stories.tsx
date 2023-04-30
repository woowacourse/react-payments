import type { Meta } from '@storybook/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CardInfoProvider } from '../../../context/CardInfoContext';
import { CardListProvider } from '../../../context/CardListContext';
import { CardRegisterPage, MyCardPage as MyCardPageComponent } from '../../../components/pages';

export const MyCardPage = () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  return (
    <MemoryRouter initialEntries={['/']}>
      <CardListProvider>
        <CardInfoProvider>
          <Routes>
            <Route path="/" element={<MyCardPageComponent />} />
            <Route path="/register" element={<CardRegisterPage />} />
          </Routes>
        </CardInfoProvider>
      </CardListProvider>
    </MemoryRouter>
  );
};

const meta: Meta<typeof MyCardPage> = {
  component: MyCardPage,
  title: 'Components/pages',
};

export default meta;
