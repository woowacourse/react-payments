import { CardNumber } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

export const ActionsData = {
  register: fn(),
};

const meta = {
  title: 'CardNumber',
  component: CardNumber,
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    register: { control: false },
  },
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    cardNumberErrors: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  },
  render: function Render(args) {
    return <CardNumber {...args} />;
  },
};

export const Valid: Story = {
  name: '유효한 카드 번호 입력',
  args: {
    cardNumberErrors: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  },
};

export const Error: Story = {
  name: '유효하지 않은 카드 번호 입력',
  args: {
    cardNumberErrors: {
      first: '숫자만 입력 가능합니다.',
      second: '',
      third: '',
      fourth: '',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
