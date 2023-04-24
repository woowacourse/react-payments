import type { Meta, StoryObj } from '@storybook/react';
import OwnerNameInput from './OwnerName';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';

const ownerNameInput = {
  component: OwnerNameInput,
  title: 'OwnerNameInput',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof OwnerNameInput>;

export default ownerNameInput;

type Story = StoryObj<typeof ownerNameInput>;

export const Example = {
  args: {},
} satisfies Story;
