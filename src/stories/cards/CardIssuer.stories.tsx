import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';
import CardIssuer from '../../components/CardAddForm/CardIssuer/CardIssuer';

const meta = {
  title: 'Payments/Cards/CardIssuerInput',
  component: CardIssuer,
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuer>;

export default meta;

export const Default = () => {
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardIssuer
      isError={inputError.issuer}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
    />
  );
};

export const SuccessInteraction = () => {
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardIssuer
      isError={inputError.issuer}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
    />
  );
};

SuccessInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByLabelText('카드사', {
    exact: false,
    selector: 'button',
  });

  expect(button).toHaveFocus();

  await userEvent.click(button);

  const BCCardButton = canvas.getByAltText('BC카드 로고').closest('button')!;
  await userEvent.click(BCCardButton);

  expect(button).toHaveTextContent('BC카드');
};

export const ErrorInteraction = () => {
  const { inputError, updateInputValue, updateInputError } = useCardAddForm();

  return (
    <CardIssuer
      isError={inputError.issuer}
      updateInputValue={updateInputValue}
      updateInputError={updateInputError}
    />
  );
};

ErrorInteraction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByLabelText('카드사', {
    exact: false,
    selector: 'button',
  });

  expect(button).toHaveFocus();

  userEvent.tab();
};
