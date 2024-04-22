import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import ExpirationDateInput from './ExpirationDateInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/ExpirationDateInput',
  component: ExpirationDateInput,
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
    onAddExpirationDate: {
      ...generateArgTypes({ control: 'object' }),
      description: 'ExpirationDateInput의 이벤트 핸들러',
    },
  },
  args: {
    value: '',
    placeholder: 'MM',
    isError: false,
    onAddExpirationDate: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '유효 기간 Input' } },
  },
};
