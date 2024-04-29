import { Meta, StoryObj } from '@storybook/react';
import CardPasswordInputSection from '@/components/registerSection/CardPasswordInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardPasswordInputSection> = {
  title: 'RegisterStep/CardPasswordInputSection',
  component: CardPasswordInputSection,
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
      description: '비밀번호 입력값',
    },
    isError: {
      control: 'boolean',
      description: '비밀번호 입력에 대한 에러 상태값',
    },
  },
  args: {
    onChange: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof CardPasswordInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
