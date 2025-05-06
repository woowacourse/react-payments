import type { Meta, StoryObj } from '@storybook/react';
import CardCVCField from './CardCVCField';
import useCardCVC from '../../../hooks/useCardCVC';

const meta = {
  title: 'CardCVCField',
  component: CardCVCField,
} satisfies Meta<typeof CardCVCField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCVC: '',
    hasError: false,
    onChange: () => {},
  },
  render: (args) => {
    const {
      cardCVC,
      handleChangeCVC,
      errorMessage: cardCVCErrorMessage,
    } = useCardCVC({ onComplete: () => {} });

    return (
      <CardCVCField
        {...args}
        cardCVC={cardCVC}
        hasError={Boolean(cardCVCErrorMessage)}
        onChange={handleChangeCVC}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardCVC: '',
    hasError: true,
    onChange: () => {},
  },
  render: (args) => {
    return <CardCVCField {...args} />;
  },
};
