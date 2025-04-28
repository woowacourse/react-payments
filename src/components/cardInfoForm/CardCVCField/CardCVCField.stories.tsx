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
    isError: false,
    onChange: () => {},
  },
  render: (args) => {
    const {
      cardCVC,
      onChangeCVC,
      errorMessage: cardCVCErrorMessage,
    } = useCardCVC();

    return (
      <CardCVCField
        {...args}
        cardCVC={cardCVC}
        isError={Boolean(cardCVCErrorMessage)}
        onChange={onChangeCVC}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardCVC: '',
    isError: true,
    onChange: () => {},
  },
  render: (args) => {
    return <CardCVCField {...args} />;
  },
};
