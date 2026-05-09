import type { Meta, StoryObj } from '@storybook/react-vite';

import Label from '../../../common/components/Label';

const meta = {
  title: 'common/components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    value: '카드 번호',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
