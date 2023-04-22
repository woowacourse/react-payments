import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/common/Input/Input';

const meta = {
  title: 'Payments/Common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder Text',
    variant: 'outline',
    isError: false,
  },
};

export const DefaultError: Story = {
  args: {
    placeholder: 'Placeholder Text',
    variant: 'outline',
    isError: true,
  },
};

export const Underline: Story = {
  args: {
    placeholder: 'Placeholder Text',
    variant: 'underline',
    isError: false,
  },
};

export const UnderlineError: Story = {
  args: {
    placeholder: 'Placeholder Text',
    variant: 'underline',
    isError: true,
  },
};
