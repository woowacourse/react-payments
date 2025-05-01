import type { Meta, StoryObj } from '@storybook/react';
import CardLabeledInput from './CardLabeledInput';
import CARD_LABEL_INPUT_CONFIG from '../../constants/cardLabeledInputConfig';
import { getFirstErrorMessage } from '../../util/getFirstErrorMessage';
import useForm from '../../hook/useForm';
import ERROR_MESSAGE from '../../constants/errorMessage';

const meta: Meta<typeof CardLabeledInput> = {
  title: 'Components/CardLabeledInput',
  component: CardLabeledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardLabeledInput>;

export const CardNumberDefault: Story = {
  render: () => {
    const { handleCardInput, errorMessages } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.cardNumber}
        errorMessage={getFirstErrorMessage([
          errorMessages.first,
          errorMessages.second,
          errorMessages.third,
          errorMessages.fourth,
        ])}
        handleCardInput={handleCardInput}
        value={{ first: '1111', second: '2222', third: '3333', fourth: '4444' }}
      />
    );
  },
};

export const CardNumberError: Story = {
  render: () => {
    const { cardInput, handleCardInput, errorMessages, isError } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.cardNumber}
        errorMessage={getFirstErrorMessage([
          ERROR_MESSAGE.NOT_A_NUMBER,
          errorMessages.second,
          errorMessages.third,
          errorMessages.fourth,
        ])}
        handleCardInput={handleCardInput}
        isErrors={{ first: true, second: isError.second, third: isError.third, fourth: isError.fourth }}
        value={{ first: '', second: cardInput.second, third: cardInput.third, fourth: cardInput.fourth }}
      />
    );
  },
};

export const ExpirationDateDefault: Story = {
  render: () => {
    const { cardInput, handleCardInput, errorMessages, isError } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.expirationDate}
        errorMessage={getFirstErrorMessage([errorMessages.first, errorMessages.second])}
        handleCardInput={handleCardInput}
        isErrors={{ first: isError.first, second: isError.second }}
        value={{ first: cardInput.first, second: cardInput.second }}
      />
    );
  },
};

export const ExpirationDateError: Story = {
  render: () => {
    const { cardInput, handleCardInput, errorMessages, isError } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.expirationDate}
        errorMessage={getFirstErrorMessage([ERROR_MESSAGE.INVALID_EXPIRATION_FORMAT, errorMessages.second])}
        handleCardInput={handleCardInput}
        isErrors={{ MM: true, YY: isError.MM }}
        value={{ MM: '3', YY: cardInput.YY }}
      />
    );
  },
};

export const CVCDefault: Story = {
  render: () => {
    const { cardInput, handleCardInput, errorMessages, isError } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.CVC}
        errorMessage={getFirstErrorMessage([errorMessages.CVC])}
        handleCardInput={handleCardInput}
        isErrors={{ CVC: isError.CVC }}
        value={{ CVC: cardInput.CVC }}
      />
    );
  },
};

export const CVCError: Story = {
  render: () => {
    const { cardInput, handleCardInput } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.CVC}
        errorMessage={getFirstErrorMessage([ERROR_MESSAGE.NOT_A_NUMBER])}
        handleCardInput={handleCardInput}
        isErrors={{ CVC: true }}
        value={{ CVC: cardInput.CVC }}
      />
    );
  },
};

export const passwordDefault: Story = {
  render: () => {
    const { cardInput, handleCardInput, errorMessages, isError } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.password}
        errorMessage={getFirstErrorMessage([errorMessages.password])}
        handleCardInput={handleCardInput}
        isErrors={{ password: isError.password }}
        value={{ password: cardInput.password }}
      />
    );
  },
};

export const passwordError: Story = {
  render: () => {
    const { handleCardInput } = useForm();

    return (
      <CardLabeledInput
        config={CARD_LABEL_INPUT_CONFIG.password}
        errorMessage={getFirstErrorMessage([ERROR_MESSAGE.NOT_A_NUMBER])}
        handleCardInput={handleCardInput}
        isErrors={{ password: true }}
        value={{ password: '' }}
      />
    );
  },
};
