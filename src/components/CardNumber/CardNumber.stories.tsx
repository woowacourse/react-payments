import type { Meta, StoryObj } from '@storybook/react';
import { CardNumber } from '@/components';
import { CardNumberInputType } from '@/types/input';
import { RegisterType } from '@/hooks/useForm';

const meta = {
  title: 'CardNumber',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockRegister: RegisterType<CardNumberInputType> = () => ({
  value: '',
  onChange: () => {},
});

export const Default: Story = {
  args: {
    cardNumberErrors: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    register: mockRegister,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
