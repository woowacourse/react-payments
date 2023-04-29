import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardSecurityCode from '../../components/CardAddForm/CardSecurityCode/CardSecurityCode';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardSecurityCodeInput',
  component: CardSecurityCode,
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;
type Story = StoryObj<typeof CardSecurityCode>;

export const Default: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardSecurityCode
        isError={inputError.securityCode}
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
      <CardSecurityCode
        isError={inputError.securityCode}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('보안 코드 (CVC/CVV)');
    const input = canvas.getByLabelText('보안 코드 (CVC/CVV)', {
      exact: false,
      selector: 'input',
    });
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, '123', { delay: 200 });
    expect(input).toHaveValue('123');

    userEvent.tab();
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardSecurityCode
        isError={inputError.securityCode}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText('보안 코드 (CVC/CVV)');
    const input = canvas.getByLabelText('보안 코드 (CVC/CVV)', {
      exact: false,
      selector: 'input',
    });
    expect(input).not.toHaveFocus();

    userEvent.click(label);

    expect(input).toHaveFocus();

    await userEvent.type(input, 'abc', { delay: 200 });
    expect(input).toHaveValue('');

    await userEvent.type(input, '11', { delay: 200 });
    expect(input).toHaveValue('11');

    userEvent.tab();
  },
};
