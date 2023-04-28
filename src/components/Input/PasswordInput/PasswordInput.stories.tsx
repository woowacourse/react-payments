import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta = {
  component: PasswordInput,
  title: 'Section/Inputs/PasswordInput',
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordInputStory: Story = {
  args: {
    first: { value: '1' },
    second: { value: '2' },
  },
};
