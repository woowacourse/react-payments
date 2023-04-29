import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardOwnerName from '../../components/CardAddForm/CardOwnerName/CardOwnerName';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardOwnerNameInput',
  component: CardOwnerName,
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardOwnerName>;

export default meta;
type Story = StoryObj<typeof CardOwnerName>;

export const Default: Story = {
  render: () => {
    const { updateInputValue } = useCardAddForm();

    return <CardOwnerName updateInputValue={updateInputValue} />;
  },
};

export const Interaction: Story = {
  render: () => {
    const { updateInputValue } = useCardAddForm();

    return <CardOwnerName updateInputValue={updateInputValue} />;
  },

  play: async ({ canvasElement }) => {
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
  },
};
