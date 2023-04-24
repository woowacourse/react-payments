import type { Meta, StoryObj } from '@storybook/react';
import ExpireDate from './ExpireDate';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';

const expireDate = {
  component: ExpireDate,
  title: 'ExpireDate',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof ExpireDate>;

export default expireDate;

type Story = StoryObj<typeof expireDate>;

export const Example = {
  args: {},
} satisfies Story;
