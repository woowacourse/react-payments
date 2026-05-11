import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import CardPassword from '../components/CardPassword';
import { useCardPassword } from '../hooks/useCardPassword';

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
    cardPassword: {
      cardPassword: '',
      cardPasswordErrorMode: 'normal',
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};

export const Filled: Story = {
  args: {
    cardPassword: {
      cardPassword: '12',
      cardPasswordErrorMode: 'normal',
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};

export const NotNumberError: Story = {
  args: {
    cardPassword: {
      cardPassword: '1',
      cardPasswordErrorMode: 'notNumber',
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};

export const PasswordCountError: Story = {
  args: {
    cardPassword: {
      cardPassword: '1',
      cardPasswordErrorMode: 'passwordCount',
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};

export const Interactive: Story = {
  args: {
    cardPassword: {
      cardPassword: '',
      cardPasswordErrorMode: 'normal',
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
  render: () => {
    const [cardPassword, setCardPassword] = useCardPassword();

    return (
      <div>
        <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />

        <div data-testid="card-password-value" style={{ marginTop: '16px' }}>
          입력값: {cardPassword.cardPassword}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordInput = canvas.getByLabelText('비밀번호 앞 2자리');

    await userEvent.type(passwordInput, '12');

    await expect(passwordInput).toHaveValue('12');
    await expect(canvas.getByTestId('card-password-value')).toHaveTextContent('12');
  },
};
