import type { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../components/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
};

export default meta;

export const MyCardPage: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  );
};

export const CardRegisterPage: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/register']}>
      <Header />
    </MemoryRouter>
  );
};
