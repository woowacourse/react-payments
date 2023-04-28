import type { Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardOwnerName from '../../components/CardAddForm/CardOwnerName/CardOwnerName';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardOwnerNameInput',
  component: CardOwnerName,
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const Default = () => {
  const { updateInputValue } = useCardAddForm();

  return <CardOwnerName updateInputValue={updateInputValue} />;
};

export const Interaction = () => {
  const { updateInputValue } = useCardAddForm();

  return <CardOwnerName updateInputValue={updateInputValue} />;
};

Interaction.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  const label = canvas.getByText('카드 소유자 이름');
  const input = canvas.getByLabelText('카드 소유자 이름', {
    exact: false,
    selector: 'input',
  });

  expect(input).not.toHaveFocus();

  userEvent.click(label);
  expect(input).toHaveFocus();

  await userEvent.type(input, 'WOOWACOURSE', { delay: 200 });

  userEvent.tab();
};
