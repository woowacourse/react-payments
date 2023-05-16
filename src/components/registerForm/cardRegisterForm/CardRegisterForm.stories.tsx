import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';
import { withRouter } from 'storybook-addon-react-router-v6';
import { userEvent, within } from '@storybook/testing-library';

import GlobalStyle from '../../../styles/globalStyle';
import RegisterPage from '../../pages/RegisterPage';
import CardRegisterForm from './CardRegisterForm';

const meta = {
  component: CardRegisterForm,
  title: 'CardRegisterForm',
  tags: ['autodocs'],
  decorators: [
    withRouter,
    (Story) => {
      return (
        <CreditCardProvider>
          <GlobalStyle />
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof RegisterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledForm = {
  args: {
    isLoading: false,
    setIsLoading: () => {},
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 1000);
    });

    await userEvent.type(canvas.getByTestId('card-number-0'), '1111', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-1'), '2222', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-2'), '3333', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-3'), '4444', { delay: 100 });

    await userEvent.type(canvas.getByTestId('expiration-date-0'), '11', { delay: 100 });
    await userEvent.type(canvas.getByTestId('expiration-date-1'), '24', { delay: 100 });

    await userEvent.type(canvas.getByTestId('owner-name'), 'ukko', { delay: 100 });
    await userEvent.type(canvas.getByTestId('security-code'), '111', { delay: 100 });
    await userEvent.type(canvas.getByTestId('password-0'), '1', { delay: 100 });
    await userEvent.type(canvas.getByTestId('password-1'), '2', { delay: 100 });
  },
} satisfies Story;
