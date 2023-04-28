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
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardSecurityCode
      isError={inputError.securityCode}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
    />
  );
};

export const SuccessInteraction = () => {
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardSecurityCode
      isError={inputError.securityCode}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
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

export const ErrorInteraction = () => {
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardSecurityCode
      isError={inputError.securityCode}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
    />
  );
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
