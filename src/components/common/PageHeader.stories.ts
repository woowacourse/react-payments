import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BackButton } from './BackButton';
import { PageHeader } from './PageHeader';

const meta = {
  title: 'common/Page.Header',
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '보유 카드',
  },
};

export const WithBackButton: Story = {
  args: {
    leading: React.createElement(BackButton),
    children: '카드 추가',
  },
};

export default meta;
