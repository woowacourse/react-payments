import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from '../iconButton';
import { CreditCard } from '../creditCard';

import { List } from './List';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <List.Item left="left" right="right" title="제목" content="내용" description="보조 내용 설명" />
      </>
    ),
  },
};

export const ListItemSkeleton: Story = {
  args: {
    children: (
      <>
        <List.ItemSkeleton left={true} title={true} content={true} description={true} right={true} />
      </>
    ),
  },
};

export const CardList: Story = {
  args: {
    children: (
      <>
        <List.Item
          left={<CreditCard size="small" />}
          right={<IconButton icon="close" />}
          title="제목"
          content="내용"
          description="보조 내용 설명"
        />
      </>
    ),
  },
};
