import type { Meta, StoryObj } from '@storybook/react';
import { CardNumber } from './CardNumber';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';

const cardNumber = {
  component: CardNumber,
  title: 'CardNumber',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

type Story = StoryObj<typeof cardNumber>;

export const Example = {
  args: {},
} satisfies Story;
