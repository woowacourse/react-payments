import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

const meta = {
  title: 'common/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '전체 앱 레이아웃을 구성하는 컴포넌트입니다.',
      },
    },
  },
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
        <Flex height="100%">
          <Text variant="Title" fontWeight="bold">
            {args.children}
          </Text>
        </Flex>
      </AppLayout>
    );
  },
};
