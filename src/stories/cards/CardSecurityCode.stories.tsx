import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardSecurityCode from '../../components/CardAddForm/CardSecurityCode/CardSecurityCode';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardSecurityCodeInput',
  component: CardSecurityCode,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleSingleInputChange } =
    useCardAddForm();

  return (
    <CardSecurityCode
      value={cardInformation.securityCode}
      isError={inputError.securityCode}
      onInputChange={handleSingleInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};

export const ErrorInteraction = () => {
  const { cardInformation, inputError, updateInputError, handleSingleInputChange } =
    useCardAddForm();

  return (
    <CardSecurityCode
      value={cardInformation.securityCode}
      isError={inputError.securityCode}
      onInputChange={handleSingleInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};

export const SuccessInteraction = () => {
  const { cardInformation, inputError, updateInputError, handleSingleInputChange } =
    useCardAddForm();

  return (
    <CardSecurityCode
      value={cardInformation.securityCode}
      isError={inputError.securityCode}
      onInputChange={handleSingleInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};

SuccessInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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
};

ErrorInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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
};
