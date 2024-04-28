import { Meta, StoryObj } from '@storybook/react';
import CardExpirationDateInputSection from '@/components/registerSection/CardExpirationDateInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardExpirationDateInputSection> = {
  title: 'RegisterStep/CardExpirationDateInputSection',
  component: CardExpirationDateInputSection,
  tags: ['autodocs'],
  argTypes: {
    month: {
      control: 'text',
      description: '카드 유효기간에 대한 월',
    },
    monthError: {
      control: 'boolean',
      description: '월에 대한 에러 상태 값',
    },
    year: {
      control: 'text',
      description: '카드 유효기간에 대한 연도',
    },
    yearError: {
      control: 'boolean',
      description: '연도 에러 상태 값',
    },
  },
  args: {
    monthChangeHandler: fn(),
    handleMonthBlur: fn(),
    yearChangeHandler: fn(),
    handleYearKeyDown: fn(),
    handleYearBlur: fn(),
  },
} satisfies Meta<typeof CardExpirationDateInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
