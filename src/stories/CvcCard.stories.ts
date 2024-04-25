import { Meta, StoryObj } from '@storybook/react';
import CvcCard from '../components/cards/CvcCard';

const meta: Meta<typeof CvcCard> = {
  title: 'Card/CvcCard',
  component: CvcCard,
  tags: ['autodocs'],
  argTypes: {
    cvc: {
      control: 'text',
      description: 'cvc 값',
    },
  },
} satisfies Meta<typeof CvcCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
