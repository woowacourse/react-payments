import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardAddForm from '../../components/CardAddForm/CardAddForm';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardAddForm',
  component: CardAddForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardAddForm>;

export default meta;

export const Default = () => {
  const {
    cardInformation,
    inputValidation,
    inputError,
    updateInputError,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <CardAddForm
      cardInformation={cardInformation}
      cardInputValidation={inputValidation}
      cardInputError={inputError}
      onButtonInputChange={handleButtonInputChange}
      onSingleInputChange={handleSingleInputChange}
      onMultipleInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
      handleSubmit={handleSubmit}
    />
  );
};

export const SuccessInteraction = () => {
  const {
    cardInformation,
    inputValidation,
    inputError,
    updateInputError,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <CardAddForm
      cardInformation={cardInformation}
      cardInputValidation={inputValidation}
      cardInputError={inputError}
      onButtonInputChange={handleButtonInputChange}
      onSingleInputChange={handleSingleInputChange}
      onMultipleInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
      handleSubmit={handleSubmit}
    />
  );
};

SuccessInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const issuerInputButton = canvas.getByLabelText('카드사', {
    exact: false,
    selector: 'button',
  });

  expect(issuerInputButton).toHaveFocus();

  await userEvent.click(issuerInputButton);

  const BCCardButton = canvas.getByAltText('BC카드 로고').closest('button')!;
  await userEvent.click(BCCardButton);

  expect(issuerInputButton).toHaveTextContent('BC카드');

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
  userEvent.tab();
};

export const ErrorInteraction = () => {
  const {
    cardInformation,
    inputValidation,
    inputError,
    updateInputError,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <CardAddForm
      cardInformation={cardInformation}
      cardInputValidation={inputValidation}
      cardInputError={inputError}
      onButtonInputChange={handleButtonInputChange}
      onSingleInputChange={handleSingleInputChange}
      onMultipleInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
      handleSubmit={handleSubmit}
    />
  );
};

ErrorInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
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

  expect(cardNumberInput).toHaveFocus();

  await userEvent.type(cardNumberInput, '123415', { delay: 200 });
  expect(cardNumberInput).toHaveValue('1234 15');

  userEvent.tab();

  const expirationDateInput = canvas.getByLabelText('만료일', {
    exact: false,
    selector: 'input',
  });

  expect(expirationDateInput).toHaveFocus();

  await userEvent.type(expirationDateInput, '5789', { delay: 200 });

  const ownerNameInput = canvas.getByLabelText('카드 소유자 이름', {
    exact: false,
    selector: 'input',
  });

  expect(ownerNameInput).toHaveFocus();

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
};
