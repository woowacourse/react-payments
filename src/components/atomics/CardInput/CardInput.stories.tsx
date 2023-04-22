import type { Meta, StoryObj } from '@storybook/react';

import CardInput from '.';

const meta: Meta<typeof CardInput> = {
  title: 'atomics/CardInput',
  component: CardInput,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberTypeOne: Story = {
  args: {
    type: 'text',
    width: '75px',
    minLength: 4,
    maxLength: 4,
    center: true,
  },
};

export const CardNumberTypeTwo: Story = {
  args: {
    type: 'password',
    width: '75px',
    minLength: 4,
    maxLength: 4,
    center: true,
  },
};

export const CardExpirationDate: Story = {
  args: {
    type: 'text',
    placeholder: 'MM / YY',
    minLength: 5,
    maxLength: 5,
    width: '150px',
    center: true,
  },
};

export const CardOwner: Story = {
  args: {
    type: 'text',
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
    minLength: 3,
    maxLength: 3,
    width: '75px',
    center: false,
  },
};

export const CardPWD: Story = {
  args: {
    type: 'password',
    minLength: 1,
    maxLength: 1,
    width: '40px',
    center: true,
  },
};
