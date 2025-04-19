import type { Meta } from '@storybook/react';
import CardNumberForm from '../components/CardNumberForm';
import useCardInfo from '../hooks/useCardInfo';

const meta = {
  title: 'CardNumberForm',
  component: CardNumberForm,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof CardNumberForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardNumberForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={4} />;
};
