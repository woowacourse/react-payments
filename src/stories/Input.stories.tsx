import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => console.log('Default'),
    width: 'xs',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 10,
  },
};

export const FilledXS: Story = {
  args: {
    value: '01',
    onChange: () => console.log('Filled XS'),
    width: 'xs',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 1,
  },
};

export const FilledS: Story = {
  args: {
    value: '012345',
    onChange: () => console.log('Filled S'),
    width: 's',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 10,
  },
};

export const FilledM: Story = {
  args: {
    value: '01234567',
    onChange: () => console.log('Filled M'),
    width: 'm',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 10,
  },
};

export const FilledL: Story = {
  args: {
    value: '0123456789',
    onChange: () => console.log('Filled L'),
    width: 'l',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 10,
  },
};

export const FilledXL: Story = {
  args: {
    value:
      '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
    onChange: () => console.log('Filled XL'),
    width: 'xl',
    type: 'number',
    inputmode: 'numeric',
    maxLength: 10,
  },
};
