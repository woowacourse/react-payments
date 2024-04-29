import { generateArgTypes } from '@utils/storybook/generateArgTypes';
import CVCNumberInput from './CVCNumberInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/PaymentsForm/CVCNumber/CVCNumberInput',
  component: CVCNumberInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 id',
    },
    placeholder: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 placeholder',
    },
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 값',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: 'input의 에러 여부',
    },
    onAddCVCNumber: {
      ...generateArgTypes({ control: 'object' }),
      description: 'CVCNumberInput의 이벤트 핸들러',
    },
  },
  args: {
    id: '',
    placeholder: '123',
    value: '',
    isError: false,
    onAddCVCNumber: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CVCNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: '기본 상태' } },
  },
};

export const Error: Story = {
  parameters: {
    docs: { description: { story: '에러가 발생한 상태' } },
  },
  args: {
    isError: true,
  },
};
