import type { Meta, StoryObj } from '@storybook/react-vite';

import Title from '../../../common/components/Title';

const meta = {
  title: 'common/components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    value: '결제할 카드 번호를 입력해 주세요',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
