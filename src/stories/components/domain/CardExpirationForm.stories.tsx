import type { Meta } from '@storybook/react';
import CardExpirationForm from '../../../components/domain/CardExpirationForm';
import useCardInfo from '../../../hooks/useCardInfoState';

const meta = {
  title: 'Components/domain/CardExpirationForm',
  component: CardExpirationForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardExpirationForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={2} />;
};
