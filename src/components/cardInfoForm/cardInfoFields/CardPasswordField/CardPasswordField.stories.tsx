import type { Meta, StoryObj } from '@storybook/react';
import CardPasswordField from './CardPasswordField';

const meta = {
  title: 'CardPasswordField',
  component: CardPasswordField,
} satisfies Meta<typeof CardPasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword: '',
    isError: false,
    onChange: () => {},
  },
  render: (args) => {
    return <CardPasswordField {...args} />;
  },
};

export const Error: Story = {
  args: {
    cardPassword: '',
    isError: true,
    onChange: () => {},
  },
  render: (args) => {
    return <CardPasswordField {...args} />;
  },
};
