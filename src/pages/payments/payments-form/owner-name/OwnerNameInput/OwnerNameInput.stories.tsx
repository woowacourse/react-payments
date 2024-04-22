import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import OwnerNameInput from './OwnerNameInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/PaymentsForm/OwnerName/OwnerNameInput',
  component: OwnerNameInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 값',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: 'input의 에러 여부',
    },
    onAddOwnerName: {
      ...generateArgTypes({ control: 'object' }),
      description: 'OwnerNameInput의 이벤트 핸들러',
    },
  },
  args: {
    value: '',
    placeholder: 'JOHNDOE',
    isError: false,
    onAddOwnerName: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '소유자 이름 Input' } },
  },
};
