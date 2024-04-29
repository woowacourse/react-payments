import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input/Input';

const meta = {
  title: 'Input',
  component: Input,

  argTypes: {
    name: {
      control: false,
      table: {
        disable: true,
      },
    },
    isRequired: {
      table: {
        disable: true,
      },
    },
    maxLength: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },

    onChange: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'name',
    name: 'name',
    value: '',
    placeholder: '1234',
    isError: false,
    maxLength: 4,
  },
};
