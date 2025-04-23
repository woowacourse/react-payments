import type { Meta, StoryObj } from '@storybook/react';
import { CardCVCNumber } from '@/components';
import { RegisterType } from '@/hooks/useForm';
import { CardCVCNumberInputType } from '@/types/input';

const meta = {
  title: 'CardCVCNumber',
  component: CardCVCNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardCVCNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockRegister: RegisterType<{ cvc: CardCVCNumberInputType }> = () => ({
  value: '',
  onChange: () => {},
});

export const Default: Story = {
  args: {
    cardCVCNumberErrors: { cvc: '' },
    register: mockRegister,
    onFocus: () => {},
    onBlur: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
