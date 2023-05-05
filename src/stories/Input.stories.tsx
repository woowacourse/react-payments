import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const InputMeta = {
  component: Input,
  title: '/Component/Input Component',
} satisfies Meta<typeof Input>;

export default InputMeta;

type Story = StoryObj<typeof InputMeta>;

export const UniversalInput: Story = {
  args: {
    value: '',
  },
};
