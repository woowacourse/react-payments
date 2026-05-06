import type {Meta, StoryObj} from '@storybook/react-vite';

import CardExpiryDateDisplay from './CardExpiryDateDisplay';

const meta = {
  title: 'feature/CardRegister/components/CardExpiryDateDisplay',
  component: CardExpiryDateDisplay,
  tags: ['autodocs'],
  args: {
    expiryMonth: '',
    expiryYear: '',
  },
} satisfies Meta<typeof CardExpiryDateDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const OnlyMonth: Story = {
  args: {
    expiryMonth: '12',
    expiryYear: '',
  },
};

export const OnlyYear: Story = {
  args: {
    expiryMonth: '',
    expiryYear: '30',
  },
};

export const Filled: Story = {
  args: {
    expiryMonth: '12',
    expiryYear: '30',
  },
};
