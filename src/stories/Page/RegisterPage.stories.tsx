import type { Meta } from '@storybook/react';
import { Main } from '../../pages/Main';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../../pages/register';
import { ModalProvider } from '../../components/providers/ModalProvider';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';

const meta = {
  title: 'Example/Page',
  component: Main,
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;

export const RegisterPageInApp = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <ModalProvider>
          <RegisterPage />
        </ModalProvider>
      </CardInfoProvider>
    </BrowserRouter>
  );
};

const RegisterPage = () => {
  return <Register />;
};
