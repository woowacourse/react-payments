import type { Meta, StoryObj } from '@storybook/react';
import HelpButton from '../components/common/HelpButton/HelpButton';

const meta = {
  component: HelpButton,
  title: 'HelpButton',
} satisfies Meta<typeof HelpButton>;

type Story = StoryObj<typeof meta>;
export const Standard: Story = {
  args: {
    message: '여기에 사용자에게 도움이 될 만한 유용한 정보를 적어주세요!',
  },
};

export default meta;
