import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/features/Card';

const meta = {
  title: 'features/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'VISA',
    cardNumbers: ['1234', '5678', '9012', '3456'],
    expireDate: '01/25',
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['VISA', 'MASTER'],
    },
  },
  render: (args) => {
    return <Card {...args} />;
  },
};
