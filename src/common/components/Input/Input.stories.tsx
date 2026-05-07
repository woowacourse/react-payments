import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import Input from './Input';

const meta = {
  title: 'common/components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: '',
    strokeMode: 'default',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1234',
    placeholder: '1234',
    strokeMode: 'default',
  },
};

export const NoInput: Story = {
  args: {
    value: '',
    placeholder: '1234',
    strokeMode: 'default',
  },
};

export const Error: Story = {
  args: {
    value: '123',
    placeholder: '1234',
    strokeMode: 'error',
  },
};
