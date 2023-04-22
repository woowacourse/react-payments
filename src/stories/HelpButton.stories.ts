import type { Meta, StoryObj } from '@storybook/react';
import HelpButton from '../components/HelpButton/HelpButton';

const meta = {
  component: HelpButton,
  title: 'HelpButton',
} satisfies Meta<typeof HelpButton>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    message: '3자리만 입력해주세요.',
  },
};

export default meta;
