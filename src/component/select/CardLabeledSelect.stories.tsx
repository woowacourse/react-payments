import type { Meta, StoryObj } from '@storybook/react';
import CardLabeledSelect from './CardLabeledSelect';
import useForm from '../../hook/useForm';
import CARD_LABEL_INPUT_CONFIG from '../../constants/cardLabeledInputConfig';

const meta: Meta<typeof CardLabeledSelect> = {
  title: 'Components/CardLabeledSelect',
  component: CardLabeledSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardLabeledSelect>;

export const CardBrandDefault: Story = {
  render: () => {
    const { handleCardInput } = useForm();

    return (
      <CardLabeledSelect config={CARD_LABEL_INPUT_CONFIG.cardBrand} value={''} handleCardInput={handleCardInput} />
    );
  },
};

export const CardBrandSelect: Story = {
  render: () => {
    const { handleCardInput } = useForm();

    return (
      <CardLabeledSelect
        config={CARD_LABEL_INPUT_CONFIG.cardBrand}
        value={'BC카드'}
        handleCardInput={handleCardInput}
      />
    );
  },
};
