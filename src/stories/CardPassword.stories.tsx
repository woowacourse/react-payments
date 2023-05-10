import { Meta, StoryObj } from '@storybook/react';
import CardPassword from '../components/CardPassword/CardPassword';
import RefProvider from '../contexts/RefProvider';
import usePassword from '../hooks/usePassword';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof CardPassword>;

export const Default: Story = {
  render: () => {
    const { cardPasswords, passwordError, isValidatedCardPasswords } =
      usePassword();

    return (
      <CardPassword
        cardPasswords={cardPasswords}
        errorMessage={passwordError}
        isValidatedCardPasswords={isValidatedCardPasswords}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { cardPasswords, passwordError, isValidatedCardPasswords } =
      usePassword();

    return (
      <CardPassword
        cardPasswords={cardPasswords}
        errorMessage={passwordError}
        isValidatedCardPasswords={isValidatedCardPasswords}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardPasswordInputs = canvas.queryAllByPlaceholderText('•');

    await userEvent.type(cardPasswordInputs[0], '1', { delay: 500 });
    await userEvent.type(cardPasswordInputs[1], '2', { delay: 500 });
  },
};

export const FailureInteraction: Story = {
  render: () => {
    const { cardPasswords, passwordError, isValidatedCardPasswords } =
      usePassword();

    return (
      <CardPassword
        cardPasswords={cardPasswords}
        errorMessage={passwordError}
        isValidatedCardPasswords={isValidatedCardPasswords}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardPasswordInputs = canvas.queryAllByPlaceholderText('•');

    await userEvent.type(cardPasswordInputs[0], 'r', { delay: 500 });
    await userEvent.type(cardPasswordInputs[1], 'ㄱ', { delay: 500 });
  },
};
