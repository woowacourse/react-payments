import type { Meta, StoryObj } from '@storybook/react';
import { CreditCardProvider } from '../../contexts/CreditCardContext';
import { withRouter } from 'storybook-addon-react-router-v6';
import { userEvent, within } from '@storybook/testing-library';
import RegisterPage from './RegisterPage';

const meta = {
  component: RegisterPage,
  title: 'RegisterPage',
  tags: ['autodocs'],
  decorators: [
    withRouter,
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof RegisterPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 1000);
    });

    await userEvent.click(canvas.getByTestId('company-icon-kb'));

    await userEvent.type(canvas.getByTestId('card-number-0'), '1111', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-1'), '2222', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-2'), '3333', { delay: 100 });
    await userEvent.type(canvas.getByTestId('card-number-3'), '00', { delay: 100 });

    await userEvent.type(canvas.getByTestId('card-number-3'), '4444', { delay: 100 });

    await userEvent.click(canvas.getByTestId('card-image'));
    await new Promise((res) => {
      setTimeout(() => {
        res(null);
      }, 1000);
    });

    await userEvent.click(canvas.getByTestId('company-icon-bc'));

    await userEvent.type(canvas.getByTestId('expiration-date-0'), '11', { delay: 100 });
    await userEvent.type(canvas.getByTestId('expiration-date-1'), '24', { delay: 100 });

    await userEvent.type(canvas.getByTestId('owner-name'), 'ukko', { delay: 100 });
    await userEvent.type(canvas.getByTestId('security-code'), '111', { delay: 100 });
    await userEvent.type(canvas.getByTestId('password-0'), '1', { delay: 100 });
    await userEvent.type(canvas.getByTestId('password-1'), '2', { delay: 100 });

    await userEvent.click(canvas.getByRole('button'));
  },
} satisfies Story;
