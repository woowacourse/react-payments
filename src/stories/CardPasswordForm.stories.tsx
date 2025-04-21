import type { Meta } from '@storybook/react';
import useCardInfo from '../hooks/useCardInfo';
import CardPasswordForm from '../components/domain/CardPasswordForm';

const meta = {
  title: 'CardPasswordForm',
  component: CardPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPasswordForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardPasswordForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={2} />;
};
