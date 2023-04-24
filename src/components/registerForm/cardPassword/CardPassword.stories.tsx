import type { Meta, StoryObj } from '@storybook/react';
import CardPassword from './CardPassword';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';

const cardPassword = {
  component: CardPassword,
  title: 'CardPassword',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof CardPassword>;

export default cardPassword;

type Story = StoryObj<typeof cardPassword>;

export const Example = {
  args: {},
} satisfies Story;
