import type { Meta, StoryObj } from '@storybook/react';
import CardBankList from 'pages/RegisterPage/CardBankList';
import CardRegisterForm from 'pages/RegisterPage/CardRegisterForm';

const CardRegisterFormMeta = {
  component: CardRegisterForm,
  title: '/pages/CardRegisterForm Component',
} satisfies Meta<typeof CardBankList>;

export default CardRegisterFormMeta;

type Story = StoryObj<typeof CardRegisterFormMeta>;

export const AddCardForm: Story = {
  args: {},
};
