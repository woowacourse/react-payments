import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardExpirationDate from '../../components/CardAddForm/CardExpirationDate/CardExpirationDate';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardExpirationDateInput',
  component: CardExpirationDate,
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;
type Story = StoryObj<typeof CardExpirationDate>;

export const Default: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardExpirationDate
        isError={inputError.expirationDate}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardExpirationDate
        isError={inputError.expirationDate}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('만료일');
    const input = canvas.getByLabelText('만료일', {
      exact: false,
      selector: 'input',
    });
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, '1223', { delay: 200 });

    userEvent.tab();
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardExpirationDate
        isError={inputError.expirationDate}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('만료일');
    const input = canvas.getByLabelText('만료일', {
      exact: false,
      selector: 'input',
    });
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, '5867', { delay: 200 });

    userEvent.tab();
  },
};
