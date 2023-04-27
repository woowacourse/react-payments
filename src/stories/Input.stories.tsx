import Input from '../components/Common/Input';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

export const Default: Story = {
  args: {},
};

export const UnResetStyle: Story = {
  args: {
    resetStyle: false,
  },
};

export const PaintedInput: Story = {
  args: {
    backgroundColor: '#525252',
  },
};
