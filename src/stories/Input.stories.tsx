import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      options: { text: 'text', number: 'number' },
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    isError: false,
    width: '100%',
    placeholder: '입력해주세요',
  },
};
