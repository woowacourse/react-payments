import type { Meta, StoryObj } from '@storybook/react-vite';

import Description from '../../../common/components/Description';

const meta = {
  title: 'common/components/Description',
  component: Description,
  tags: ['autodocs'],
  args: {
    value: '본인 명의의 카드만 결제 가능합니다.',
  },
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
