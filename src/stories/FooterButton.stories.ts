import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from '../components/common/FooterButton/FooterButton';

const meta = {
  component: FooterButton,
  title: 'FooterButton',
} satisfies Meta<typeof FooterButton>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    title: '다음',
  },
};

export default meta;
