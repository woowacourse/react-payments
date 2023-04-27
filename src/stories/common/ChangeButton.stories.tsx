import { Meta, StoryObj } from '@storybook/react';
import ChangeButton from '../../components/common/ChangeButton';

const meta: Meta<typeof ChangeButton> = {
  component: ChangeButton,
  title: 'ChangeButton',
};

export default meta;

type Story = StoryObj<typeof ChangeButton>;

export const Default: Story = {
  args: {
    text: '카드 변경하기',
  },
};

export const YellowButton: Story = {
  args: {
    text: '카드 변경하기',
    bgColor: 'yellow',
  },
};

export const BlueButton: Story = {
  args: {
    text: '카드 변경하기',
    bgColor: 'blue',
    color: 'white',
  },
};
