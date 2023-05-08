import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardNumber from '../../components/CardAddForm/CardNumber/CardNumber';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardNumberInput',
  component: CardNumber,
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardNumber>;

export default meta;
type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {
  render: () => {
    const { cardInformation, inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardNumber
        value={cardInformation.cardNumber}
        isError={inputError.cardNumber}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { cardInformation, inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardNumber
        value={cardInformation.cardNumber}
        isError={inputError.cardNumber}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('카드 번호');
    const inputs = canvas.queryAllByLabelText('카드 번호', {
      exact: false,
      selector: 'input',
    });
    expect(inputs[0]).not.toHaveFocus();

    userEvent.click(label);

    expect(inputs[0]).toHaveFocus();

    await userEvent.type(inputs[0], '1234', { delay: 200 });
    expect(inputs[0]).toHaveValue('1234');

    await userEvent.type(inputs[1], '1234', { delay: 200 });
    expect(inputs[1]).toHaveValue('1234');

    await userEvent.type(inputs[2], '1234', { delay: 200 });
    expect(inputs[2]).toHaveValue('1234');

    await userEvent.type(inputs[3], '1234', { delay: 200 });
    expect(inputs[3]).toHaveValue('1234');

    userEvent.tab();
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { cardInformation, inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardNumber
        value={cardInformation.cardNumber}
        isError={inputError.cardNumber}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('카드 번호');
    const inputs = canvas.queryAllByLabelText('카드 번호', {
      exact: false,
      selector: 'input',
    });
    expect(inputs[0]).not.toHaveFocus();

    userEvent.click(label);

    expect(inputs[0]).toHaveFocus();

    await userEvent.type(inputs[0], '1234', { delay: 200 });
    expect(inputs[0]).toHaveValue('1234');

    await userEvent.type(inputs[1], '1', { delay: 200 });

    userEvent.tab();
    userEvent.tab();
    userEvent.tab();
  },
};
