import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../components/TextInput';

const meta = {
  title: 'TextInput',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    borderColor: 'normal',
    placeholder: 'placeHolder',
    value: '',
  },
};

export const WithContainer: Story = {
  args: {
    borderColor: 'normal',
    placeholder: 'placeHolder',
    value: '',
  },
};
