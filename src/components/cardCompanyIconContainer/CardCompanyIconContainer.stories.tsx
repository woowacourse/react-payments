import type { Meta, StoryObj } from '@storybook/react';
import CardCompanyIconContainer from './CardCompanyIconContainer';
import { CreditCardProvider } from '../../contexts/CreditCardContext';

const meta = {
  component: CardCompanyIconContainer,
  title: 'CardCompanyIconContainer',
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
} satisfies Meta<typeof CardCompanyIconContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    cardCompany: 'shinhan',
  },
} satisfies Story;
