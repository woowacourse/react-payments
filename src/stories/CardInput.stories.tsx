import { Meta, StoryObj } from '@storybook/react';
import CardInput from '../components/@common/CardInput';

const meta = {
  component: CardInput,
  title: 'Item/CardInput',
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: '0000',
    inputMode: 'numeric',
  },
};

export const CardExpiredDate: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'MM',
    inputMode: 'numeric',
  },
};

export const CardOwnerName: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'NAME',
    inputMode: 'text',
  },
};

export const CardSecurityCode: Story = {
  args: {
    type: 'password',
    value: '',
    placeholder: '•••',
    inputMode: 'numeric',
  },
};

export const CardPassword: Story = {
  args: {
    type: 'password',
    value: '',
    placeholder: '•',
    inputMode: 'numeric',
  },
};
