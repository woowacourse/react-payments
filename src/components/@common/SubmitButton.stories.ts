import { Meta, StoryObj } from '@storybook/react';
import SubmitButton from './SubmitButton';

const meta = {
  component: SubmitButton,
  title: 'Section/SubmitButton',
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubmitButtonStory: Story = {
  args: {
    textContent: '확인',
    color: true,
    cursor: true,
  },
};
