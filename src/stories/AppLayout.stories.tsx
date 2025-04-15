import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '../components/common/AppLayout';
import { Text } from '../components/common/Text';

const meta = {
  title: 'common/AppLayout',
  component: AppLayout,
} satisfies Meta<typeof AppLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '페이먼트 앱 레이아웃 입니다.',
  },
  render: (args) => {
    return (
      <AppLayout>
        <Text variant="Title" fontWeight="bold">
          {args.children}
        </Text>
      </AppLayout>
    );
  },
};
