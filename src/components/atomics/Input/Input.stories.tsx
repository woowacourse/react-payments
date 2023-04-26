import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'atomics/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberTypeOne: Story = {
  args: {
    type: 'number',
    variant: 'underline',
    width: '75px',
    minLength: 4,
    maxLength: 4,
    center: true,
  },
};

export const CardNumberTypeTwo: Story = {
  args: {
    type: 'password',
    variant: 'underline',
    width: '75px',
    minLength: 4,
    maxLength: 4,
    center: true,
  },
};

export const CardExpirationDateForMonth: Story = {
  args: {
    type: 'number',
    variant: 'underline',
    placeholder: 'MM',
    minLength: 2,
    maxLength: 2,
    width: '75px',
    center: true,
  },
};

export const CardExpirationDateForYear: Story = {
  args: {
    type: 'number',
    variant: 'underline',
    placeholder: 'YY',
    minLength: 2,
    maxLength: 2,
    width: '75px',
    center: true,
  },
};

export const CardOwner: Story = {
  args: {
    type: 'text',
    variant: 'underline',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    minLength: 0,
    maxLength: 30,
    width: '250px',
    center: false,
  },
};

export const CardCVC: Story = {
  args: {
    type: 'password',
    variant: 'underline',
    minLength: 3,
    maxLength: 3,
    width: '75px',
    center: true,
  },
};

export const CardPWD: Story = {
  args: {
    type: 'password',
    variant: 'underline',
    minLength: 1,
    maxLength: 1,
    width: '40px',
    center: true,
  },
};
