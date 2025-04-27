import type { Meta, StoryObj } from '@storybook/react';
import CardCVCField from './CardCVCField';

const meta = {
  title: 'CardCVCField',
  component: CardCVCField,
} satisfies Meta<typeof CardCVCField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCVC: '123',
    isError: false,
    onChange: () => {},
  },

  render: (args) => {
    return <CardCVCField {...args} />;
  },
};

export const Error: Story = {
  args: {
    cardCVC: '12',
    isError: true,
    onChange: () => {},
  },
  render: (args) => {
    return <CardCVCField {...args} />;
  },
};
