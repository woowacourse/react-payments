import type { Meta, StoryObj } from '@storybook/react';
import TitleContainer from '../components/TitleContainer';

const meta = {
  title: 'TitleContainer',
  component: TitleContainer,
} satisfies Meta<typeof TitleContainer>;

export default meta;
type Story = StoryObj<typeof TitleContainer>;

export const Default: Story = {
  args: {
    title: '제목 표시',
    subTitle: '부제목 표시',
  },
};

export const TitleOnly: Story = {
  args: {
    title: '제목 표시',
  },
};
