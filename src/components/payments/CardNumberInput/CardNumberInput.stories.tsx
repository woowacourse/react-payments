import CardNumberInput from './CardNumberInput';
import { generateArgTypes } from '@utils/generateArgTypes';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/CardNumberInput',
  component: CardNumberInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      const onAddCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

      return <Story args={{ ...context.args, value, onAddCardNumber }} />;
    },
  ],
  argTypes: {
    value: {
      ...generateArgTypes({ control: 'text' }),
      description: 'input의 값',
    },
    isError: {
      ...generateArgTypes({ control: 'boolean' }),
      description: 'input의 에러 여부',
    },
    onAddCardNumber: {
      ...generateArgTypes({ control: 'object' }),
      description: 'CardNumberInput의 이벤트 핸들러',
    },
  },
  args: {
    onAddCardNumber: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '카드 번호 Input',
      },
    },
  },

  args: {
    value: '',
    isError: false,
  },
};
