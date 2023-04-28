import { Meta, StoryObj } from '@storybook/react';
import { SecurityCodeInput } from './SecurityCodeInput';

const meta = {
  component: SecurityCodeInput,
  title: 'Section/Inputs/SecurityCodeInput',
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecurityCodeInputStory: Story = {
  args: {
    value: '123',
  },
};
