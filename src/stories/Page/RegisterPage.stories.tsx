import type { Meta } from '@storybook/react';
import { Main } from '../../pages/Main';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '../../pages/register';
import { CardInfoProvider } from '../../components/providers/CardInfoProvider';
import { ModalProvider } from '@kyw0716/woowacourse-scent-modal';

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
