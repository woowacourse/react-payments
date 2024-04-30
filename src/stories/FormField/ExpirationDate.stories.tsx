import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDate from '../../components/FormField/ExpirationDate';
import { fn } from '@storybook/test';

const meta = {
  title: 'FormField_유효기간',
  component: ExpirationDate,
} satisfies Meta<typeof ExpirationDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    expirationDateState: { month: '', year: '' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: false },
  },
};

export const 정상입력: Story = {
  args: {
    expirationDateState: { month: '12', year: '24' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: false },
  },
};

export const 월_입력의_형식이_아닌_경우: Story = {
  args: {
    expirationDateState: { month: '쿠', year: '24' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: true, isYearError: false },
  },
};

export const 월_입력_길이가_맞지_않은_경우: Story = {
  args: {
    expirationDateState: { month: '3', year: '24' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: true, isYearError: false },
  },
};

export const 년_입력의_형식이_아닌_경우: Story = {
  args: {
    expirationDateState: { month: '12', year: '쿠' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: true },
  },
};

export const 년_입력의_길이가_맞지_않은_경우: Story = {
  args: {
    expirationDateState: { month: '12', year: '234' },
    setExpirationDateState: { onChangeMonth: fn(), onChangeYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: true },
  },
};
