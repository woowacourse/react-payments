import type { Meta, StoryObj } from '@storybook/react';
import { CardExpirationDate } from '@/components';
import { RegisterType } from '@/hooks/useForm';
import { CardExpirationDateInputType } from '@/types/input';

const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockRegister: RegisterType<CardExpirationDateInputType> = () => ({
  value: '',
  onChange: () => {},
});

export const Default: Story = {
  args: {
    cardExpirationDateErrors: {
      month: '',
      year: '',
    },
    register: mockRegister,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
