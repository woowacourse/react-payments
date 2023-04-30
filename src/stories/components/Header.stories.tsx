import type { Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { Header } from '../../components';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  );
};

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
