import type { Meta, StoryObj } from '@storybook/react';
import CardCompanyIconBox from './CardCompanyIconBox';
import { CreditCardProvider } from '../../contexts/CreditCardContext';

const meta = {
  component: CardCompanyIconBox,
  title: 'BankIconBox',
  argTypes: {
    cardCompany: {
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story) => {
      return (
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      );
    },
  ],
} satisfies Meta<typeof CardCompanyIconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    cardCompany: 'shinhan',
  },
} satisfies Story;
