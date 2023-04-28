import type { Meta } from '@storybook/react';
import CardNameChangeForm from '../../components/CardNameChangeForm/CardNameChangeForm';

const meta = {
  title: 'Payments/Cards/CardNameChangeForm',
  component: CardNameChangeForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNameChangeForm>;

export default meta;

export const Default = () => {
  return <CardNameChangeForm id={1} defaultCardName="카드 1" />;
};
