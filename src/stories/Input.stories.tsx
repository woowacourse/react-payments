import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input';

const meta = {
  title: 'Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'month',
    placeholder: 'MM',
    setValue: () => {},
    maxLength: 2,
    validation: () => {},
    handleError: () => {},
  },
};
