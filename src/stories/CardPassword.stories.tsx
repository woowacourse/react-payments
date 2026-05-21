import type { Meta, StoryObj } from '@storybook/react-vite';
import CardPassword from '../components/CardPassword';
import { useCardPassword } from '../hooks/useCardPassword';
import { createPasswordHandlers, emptyPassword, filledPassword } from './cardStoryFixtures';

const meta = {
  title: 'Components/CardPassword',
  component: CardPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword: emptyPassword,
    setCardPassword: createPasswordHandlers(),
  },
};

export const Filled: Story = {
  args: {
    cardPassword: filledPassword,
    setCardPassword: createPasswordHandlers(),
  },
};

export const NotNumberError: Story = {
  args: {
    cardPassword: {
      cardPassword: '1',
      cardPasswordErrorMode: 'notNumber',
    },
    setCardPassword: createPasswordHandlers(),
  },
};

export const PasswordCountError: Story = {
  args: {
    cardPassword: {
      cardPassword: '1',
      cardPasswordErrorMode: 'passwordCount',
    },
    setCardPassword: createPasswordHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardPassword: emptyPassword,
    setCardPassword: createPasswordHandlers(),
  },
  render: () => {
    const { cardPassword, cardPasswordHandler: setCardPassword } = useCardPassword();

    return <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />;
  },
};
