import type { Meta, StoryObj } from '@storybook/react';
import CardPassword from './CardPasswordField';
import useCardPassword from '../../../hooks/useCardPassword';

const meta = {
  title: 'CardPassword',
  component: CardPassword,
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword: '',
    hasError: false,
    onChange: () => {},
  },
  render: (args) => {
    const {
      cardPassword,
      onChangeCardPassword,
      errorMessage: cardPasswordErrorMessage,
    } = useCardPassword();

    return (
      <CardPassword
        {...args}
        cardPassword={cardPassword}
        hasError={Boolean(cardPasswordErrorMessage)}
        onChange={onChangeCardPassword}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardPassword: '',
    hasError: true,
    onChange: () => {},
  },
  render: (args) => {
    return <CardPassword {...args} />;
  },
};
