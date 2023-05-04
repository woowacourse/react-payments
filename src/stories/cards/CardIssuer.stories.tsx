/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ModalProvider } from '@ashleysyheo/react-modal';
import CardIssuer from '../../components/CardAddForm/CardIssuer/CardIssuer';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardIssuerInput',
  component: CardIssuer,
  decorators: [
    (Story) => (
      <ModalProvider>
        <CardListProvider>
          <Story />
        </CardListProvider>
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof CardIssuer>;

export default meta;
type Story = StoryObj<typeof CardIssuer>;

export const Default: Story = {
  render: () => {
    const { cardInformation, inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardIssuer
        value={cardInformation.issuer}
        isError={inputError.issuer}
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
      <CardIssuer
        value={cardInformation.issuer}
        isError={inputError.issuer}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByLabelText('카드사', {
      exact: false,
      selector: 'button',
    });
    expect(button).toHaveFocus();

    await userEvent.click(button);

    const BCCardButton = document.querySelector('button[value="BC카드"]')!;
    await userEvent.click(BCCardButton);
    expect(button).toHaveTextContent('BC카드');
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { cardInformation, inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardIssuer
        value={cardInformation.issuer}
        isError={inputError.issuer}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByLabelText('카드사', {
      exact: false,
      selector: 'button',
    });
    expect(button).toHaveFocus();

    userEvent.tab();
  },
};
