import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Common/Button';

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '확인',
  },
};

export const Wide: Story = {
  args: {
    children: '다음',
    customStyle: css`width: 100%;`,
  },
};
