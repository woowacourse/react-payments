import type { Meta } from '@storybook/react';
import CardCVCForm from '../components/domain/CardCVCForm';
import useCardInfo from '../hooks/useCardInfo';

const meta = {
  title: 'CardCVCForm',
  component: CardCVCForm,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
} satisfies Meta<typeof CardCVCForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardCVCForm cardInfo={cardInfo} handleCardInfo={handleCardInfo} maxLength={3} />;
};
