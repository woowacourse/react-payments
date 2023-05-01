/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardAddForm from '../../components/CardAddForm/CardAddForm';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';
import { ModalProvider } from '../../contexts/ModalContext';

const meta = {
  title: 'Payments/Cards/CardAddForm',
  component: CardAddForm,
  decorators: [
    (Story) => (
      <ModalProvider>
        <CardListProvider>
          <Story />
        </CardListProvider>
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof CardAddForm>;

export default meta;
type Story = StoryObj<typeof CardAddForm>;

export const Default: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError, handleSubmit } = useCardAddForm();

    return (
      <CardAddForm
        cardInputError={inputError}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
        handleSubmit={handleSubmit}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError, handleSubmit } = useCardAddForm();

    return (
      <CardAddForm
        cardInputError={inputError}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
        handleSubmit={handleSubmit}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const issuerInputButton = canvas.getByLabelText('카드사', {
      exact: false,
      selector: 'button',
    });
    expect(issuerInputButton).toHaveFocus();

    await userEvent.click(issuerInputButton);

    const BCCardButton = document.querySelector('button[value="BC카드"]')!;
    await userEvent.click(BCCardButton);
    expect(issuerInputButton).toHaveTextContent('BC카드');

    await new Promise((resolve) => setTimeout(resolve, 700));

    const cardNumberInput = canvas.getByLabelText('카드 번호', {
      exact: false,
      selector: 'input',
    });
    expect(cardNumberInput).toHaveFocus();

    await userEvent.type(cardNumberInput, '1234123412341234', { delay: 200 });
    expect(cardNumberInput).toHaveValue('1234 1234 •••• ••••');

    const expirationDateInput = canvas.getByLabelText('만료일', {
      exact: false,
      selector: 'input',
    });
    expect(expirationDateInput).toHaveFocus();

    await userEvent.type(expirationDateInput, '1223', { delay: 200 });

    const ownerNameInput = canvas.getByLabelText('카드 소유자 이름', {
      exact: false,
      selector: 'input',
    });
    expect(ownerNameInput).toHaveFocus();

    await userEvent.type(ownerNameInput, 'WOOWACOURSE', { delay: 200 });

    userEvent.tab();

    const securityCodeInput = canvas.getByLabelText('보안 코드 (CVC/CVV)', {
      exact: false,
      selector: 'input',
    });
    expect(securityCodeInput).toHaveFocus();

    await userEvent.type(securityCodeInput, '1234', { delay: 200 });
    expect(securityCodeInput).toHaveValue('1234');

    const passwordInputs = canvas.queryAllByLabelText('비밀번호', {
      exact: false,
      selector: 'input',
    });
    expect(passwordInputs[0]).toHaveFocus();

    await userEvent.type(passwordInputs[0], '1', { delay: 200 });
    expect(passwordInputs[1]).toHaveFocus();

    await userEvent.type(passwordInputs[1], '2', { delay: 200 });
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError, handleSubmit } = useCardAddForm();

    return (
      <CardAddForm
        cardInputError={inputError}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
        handleSubmit={handleSubmit}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const issuerInputButton = canvas.getByLabelText('카드사', {
      exact: false,
      selector: 'button',
    });
    expect(issuerInputButton).toHaveFocus();

    userEvent.tab();

    const cardNumberInput = canvas.getByLabelText('카드 번호', {
      exact: false,
      selector: 'input',
    });
    await userEvent.type(cardNumberInput, '123415', { delay: 200 });
    expect(cardNumberInput).toHaveValue('1234 15');

    userEvent.tab();

    const expirationDateInput = canvas.getByLabelText('만료일', {
      exact: false,
      selector: 'input',
    });
    await userEvent.type(expirationDateInput, '5789', { delay: 200 });

    userEvent.tab();

    const ownerNameInput = canvas.getByLabelText('카드 소유자 이름', {
      exact: false,
      selector: 'input',
    });
    await userEvent.type(ownerNameInput, 'WOOWACOURSE', { delay: 200 });

    userEvent.tab();
    userEvent.tab();

    const passwordInputs = canvas.queryAllByLabelText('비밀번호', {
      exact: false,
      selector: 'input',
    });
    expect(passwordInputs[0]).toHaveFocus();

    await userEvent.type(passwordInputs[0], '1', { delay: 200 });
    expect(passwordInputs[1]).toHaveFocus();

    userEvent.tab();
  },
};
