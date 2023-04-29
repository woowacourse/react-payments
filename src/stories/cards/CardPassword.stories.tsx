import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';
import { CardListProvider } from '../../contexts/CardListContext';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardPassword>;

export default meta;
type Story = StoryObj<typeof CardPassword>;

export const Default: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardPassword
        isError={inputError.password}
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
      <CardPassword
        isError={inputError.password}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
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
  },
};

export const ErrorInteraction: Story = {
  render: () => {
    const { inputError, updateInputValue, updateInputError } = useCardAddForm();

    return (
      <CardPassword
        isError={inputError.password}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
    );
  },

  play: async ({ canvasElement }) => {
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
  },
};
