import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Input',
  component: Input
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '1234',
    isError: true,
    onChange: action('onChange'),
    maxLength: 4
  }
};

export const Valid: Story = {
  args: {
    ...Default.args,
    value: '2354',
    isError: true
  }
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    value: 'gdas',
    isError: false
  }
};
