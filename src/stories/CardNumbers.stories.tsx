import { Meta, StoryObj } from '@storybook/react';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import RefProvider from '../contexts/RefProvider';
import useCardNumbers from '../hooks/useCardNumbers';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof CardNumbers>;

export const Default: Story = {
  render: () => {
    const { cardNumbers, cardNumbersError, isValidatedCardNumbers } =
      useCardNumbers();

    return (
      <CardNumbers
        cardNumbers={cardNumbers}
        errorMessage={cardNumbersError}
        isValidatedCardNumbers={isValidatedCardNumbers}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { cardNumbers, cardNumbersError, isValidatedCardNumbers } =
      useCardNumbers();

    return (
      <CardNumbers
        cardNumbers={cardNumbers}
        errorMessage={cardNumbersError}
        isValidatedCardNumbers={isValidatedCardNumbers}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInputs = canvas.queryAllByPlaceholderText('0000');

    await userEvent.type(cardNumberInputs[0], '1212', { delay: 200 });
    await userEvent.type(cardNumberInputs[1], '4532', { delay: 200 });
    await userEvent.type(cardNumberInputs[2], '1112', { delay: 200 });
    await userEvent.type(cardNumberInputs[3], '0212', { delay: 200 });
  },
};

export const FailureInteraction: Story = {
  render: () => {
    const { cardNumbers, cardNumbersError, isValidatedCardNumbers } =
      useCardNumbers();

    return (
      <CardNumbers
        cardNumbers={cardNumbers}
        errorMessage={cardNumbersError}
        isValidatedCardNumbers={isValidatedCardNumbers}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInputs = canvas.queryAllByPlaceholderText('0000');

    await userEvent.type(cardNumberInputs[0], '12ㄷㄹ', { delay: 200 });
    await userEvent.type(cardNumberInputs[1], 'ab32', { delay: 200 });
    await userEvent.type(cardNumberInputs[2], '!@45', { delay: 200 });
    await userEvent.type(cardNumberInputs[3], '9rㄱㄴ', { delay: 200 });
  },
};
