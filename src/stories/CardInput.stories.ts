import { StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import CardInput from '../components/CardInput';

const meta = {
  title: 'CardInput',
  component: CardInput,
  tags: ['autodocs'],
  argTypes: {
    isSecured: {
      control: { type: 'boolean' },
    },
    isAutoFocus: {
      control: { type: 'boolean' },
    },
    isRequired: {
      control: { type: 'boolean' },
    }
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    id: 'cardNumber',
    placeholder: '카드 번호를 입력해 주세요.',
    isSecured: false,
    isAutoFocus: true,
    isRequired: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cardNumberInput = canvas.getByPlaceholderText('카드 번호를 입력해 주세요.');

    await userEvent.type(cardNumberInput, '1234 - 5678 - •••• - ••••', {
      delay: 100,
    });
  },
};

export const ExpiredDate: Story = {
  args: {
    id: 'expiredDate',
    placeholder: 'MM / YY',
    width: '137px',
    isSecured: false,
    isAutoFocus: false,
    isRequired: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const expiredDateInput = canvas.getByPlaceholderText('MM / YY');

    await userEvent.type(expiredDateInput, '12 / 34', {
      delay: 100,
    });
  },
};

export const OwnerName: Story = {
  args: {
    id: 'ownerName',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    isSecured: false,
    isAutoFocus: false,
    isRequired: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const ownerNameInput = canvas.getByPlaceholderText('카드에 표시된 이름과 동일하게 입력하세요.');

    await userEvent.type(ownerNameInput, 'GCPARK', {
      delay: 100,
    });
  },
};

export const Cvc: Story = {
  args: {
    id: 'cvc',
    placeholder:"cvc",
    width: '84px',
    isSecured: true,
    isAutoFocus: false,
    isRequired: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const cvcInput = canvas.getByPlaceholderText('cvc');

    await userEvent.type(cvcInput, '333', {
      delay: 100,
    });
  },
};

export const Password: Story = {
  args: {
    id: 'passwordFirst',
    placeholder: "password",
    width: '42px',
    isSecured: true,
    isAutoFocus: false,
    isRequired: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const passwordInput = canvas.getByPlaceholderText('password');

    await userEvent.type(passwordInput, '3', {
      delay: 100,
    });
  },
};
