import { Meta, StoryObj } from '@storybook/react';
import SubmitButton from '../components/@common/SubmitButton';

const meta = {
  component: SubmitButton,
  title: 'Item/SubmitButton',
} satisfies Meta<typeof SubmitButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EnableToSubmitStory: Story = {
  args: {
    textContent: '확인',
    color: true,
    cursor: true,
  },
};

export const DisableToSubmitStory: Story = {
  args: {
    textContent: '확인',
    color: false,
    cursor: false,
  },
};
