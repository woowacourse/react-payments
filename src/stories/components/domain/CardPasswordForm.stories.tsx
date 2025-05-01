import type { Meta } from '@storybook/react';
import CardPasswordForm from '../../../components/domain/CardPasswordForm';
import useCardInfo from '../../../hooks/useCardInfoState';

const meta = {
  title: 'Components/domain/CardPasswordForm',
  component: CardPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPasswordForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardPasswordForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={2} />;
};
