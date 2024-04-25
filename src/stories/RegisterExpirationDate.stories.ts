import { Meta, StoryObj } from '@storybook/react';
import RegisterExpirationDate from '../components/registerSection/RegisterExpirationDate';
import { fn } from '@storybook/test';

const meta: Meta<typeof RegisterExpirationDate> = {
  title: 'RegisterStep/RegisterExpirationDate',
  component: RegisterExpirationDate,
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
    handleMonthKeyDown: fn(),
    handleMonthBlur: fn(),
    yearChangeHandler: fn(),
    handleYearKeyDown: fn(),
    handleYearBlur: fn(),
  },
} satisfies Meta<typeof RegisterExpirationDate>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
