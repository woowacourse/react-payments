import { Meta, StoryObj } from '@storybook/react';
import CardPasswordInputs from './CardPasswordInputs';

const meta = {
  title: 'CardPasswordInputs',
  component: CardPasswordInputs,
} satisfies Meta<typeof CardPasswordInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    password: '12',
    changePassword: () => alert('변경'),
    handleOpenButton: () => alert('변경'),
  },
};
