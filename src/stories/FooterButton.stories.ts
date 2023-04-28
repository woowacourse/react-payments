import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from '../components/common/FooterButton/FooterButton';

const meta = {
  component: FooterButton,
  title: 'FooterButton',
  tags: ['autodocs'],
} satisfies Meta<typeof FooterButton>;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    title: '다음',
  },
};

export const Disabled: Story = {
  args: {
    title: '다음',
    disabled: true,
  },
};

export default meta;
