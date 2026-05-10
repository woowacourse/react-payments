import type {Meta, StoryObj} from '@storybook/react-vite';

import CardExpiryDateDisplay from './CardExpiryDateDisplay';

const meta = {
  title: 'feature/CardRegister/components/preview/CardExpiryDateDisplay',
  component: CardExpiryDateDisplay,
  tags: ['autodocs'],
  args: {
    expiryDate: ['', ''],
  },
} satisfies Meta<typeof CardExpiryDateDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const OnlyMonth: Story = {
  args: {
    expiryDate: ['12', ''],
  },
};

export const OnlyYear: Story = {
  args: {
    expiryDate: ['', '30'],
  },
};

export const Filled: Story = {
  args: {
    expiryDate: ['12', '30'],
  },
};
