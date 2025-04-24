import type { Meta } from '@storybook/react';
import CardNumberForm from '../../../components/domain/CardNumberForm';
import useCardInfo from '../../../hooks/useCardInfoState';
const meta = {
  title: 'Components/domain/CardNumberForm',
  component: CardNumberForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardNumberForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={4} />;
};
