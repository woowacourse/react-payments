import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as ArrowDownIcon } from '../../assets/common/arrow-down.svg';
import { Button } from './Button';
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
    leading: (
      <Button>
        <ArrowDownIcon />
      </Button>
    ),
    children: '카드 추가',
  },
};

export default meta;
