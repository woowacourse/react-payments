import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleMultipleInputChange } =
    useCardAddForm();

  return (
    <CardPassword
      values={cardInformation.password}
      isError={inputError.password}
      onInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
    />
  );
};

export const SuccessInteraction = () => {
  const { cardInformation, inputError, updateInputError, handleMultipleInputChange } =
    useCardAddForm();

  return (
    <CardPassword
      values={cardInformation.password}
      isError={inputError.password}
      onInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
    />
  );
};

SuccessInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('비밀번호');
  const input = canvas.queryAllByLabelText('비밀번호', {
    exact: false,
    selector: 'input',
  });

  expect(input[0]).not.toHaveFocus();

  userEvent.click(label);
  expect(input[0]).toHaveFocus();
  expect(input[1]).not.toHaveFocus();

  await userEvent.type(input[0], '1', { delay: 200 });
  expect(input[1]).toHaveFocus();

  await userEvent.type(input[1], '2', { delay: 200 });
  userEvent.tab();
};

export const ErrorInteraction = () => {
  const { cardInformation, inputError, updateInputError, handleMultipleInputChange } =
    useCardAddForm();

  return (
    <CardPassword
      values={cardInformation.password}
      isError={inputError.password}
      onInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
    />
  );
};

ErrorInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('비밀번호');
  const input = canvas.queryAllByLabelText('비밀번호', {
    exact: false,
    selector: 'input',
  });

  expect(input[0]).not.toHaveFocus();

  userEvent.click(label);
  expect(input[0]).toHaveFocus();
  expect(input[1]).not.toHaveFocus();

  await userEvent.type(input[0], '1', { delay: 200 });

  userEvent.tab();
};
