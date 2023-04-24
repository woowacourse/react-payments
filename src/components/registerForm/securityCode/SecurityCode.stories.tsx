import type { Meta, StoryObj } from '@storybook/react';
import SecurityCode from './SecurityCode';
import { CreditCardProvider } from '../../../contexts/CreditCardContext';

const securityCode = {
  component: SecurityCode,
  title: 'SecurityCode',
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

type Story = StoryObj<typeof securityCode>;

export const Example = {
  args: {},
} satisfies Story;
