import { Meta, StoryObj } from '@storybook/react';
import CardOwnerNameInputSection from '@/components/registerSection/CardOwnerNameInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardOwnerNameInputSection> = {
  title: 'RegisterStep/CardOwnerNameInputSection',
  component: CardOwnerNameInputSection,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: '카드사 변경 함수',
    },
    onBlur: {
      description: '포커스 잃었을때 실행할 함수',
    },
    value: {
      control: 'string',
      description: '이름 입력값',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태값',
    },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof CardOwnerNameInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
