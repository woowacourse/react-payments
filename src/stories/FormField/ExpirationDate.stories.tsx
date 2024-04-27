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
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: false },
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 정상입력: Story = {
  args: {
    expirationDateState: { month: '12', year: '24' },
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: false },
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 월_입력의_형식이_아닌_경우: Story = {
  args: {
    expirationDateState: { month: '쿠', year: '24' },
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: true, isYearError: false },
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 월_입력_길이가_맞지_않은_경우: Story = {
  args: {
    expirationDateState: { month: '3', year: '24' },
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: true, isYearError: false },
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 년_입력의_형식이_아닌_경우: Story = {
  args: {
    expirationDateState: { month: '12', year: '쿠' },
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: true },
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 년_입력의_길이가_맞지_않은_경우: Story = {
  args: {
    expirationDateState: { month: '12', year: '234' },
    setExpirationDateState: { setMonth: fn(), setYear: fn() },
    expirationDateErrorState: { isMonthError: false, isYearError: true },
    showNextFieldOnLastElementBlur: fn(),
  },
};
