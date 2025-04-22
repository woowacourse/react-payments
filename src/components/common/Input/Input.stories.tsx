import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  title: 'Input',
  component: Input,
  args: {
    placeholder: '1234',
    maxLength: 4
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    isValid: true
  }
};

export const Valid: Story = {
  args: {
    value: '2354',
    isValid: true
  }
};

export const Invalid: Story = {
  args: {
    value: 'gdas',
    isValid: false
  }
};
