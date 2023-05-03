import { Meta, StoryObj } from '@storybook/react';
import SubmitButton from '../components/@common/SubmitButton';

const meta = {
  component: SubmitButton,
  title: 'Item/SubmitButton',
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
