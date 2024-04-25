import { generateArgTypes } from '@utils/generateArgTypes';
import ExpirationDateInput from './ExpirationDateInput';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Payments/ExpirationDateInput',
  component: ExpirationDateInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      const onAddExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

      return <Story args={{ ...context.args, value, onAddExpirationDate }} />;
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
    onAddExpirationDate: {
      ...generateArgTypes({ control: 'object' }),
      description: 'ExpirationDateInput의 이벤트 핸들러',
    },
  },
  args: {
    onAddExpirationDate: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '유효 기간 Input',
      },
    },
  },
  args: {
    value: '',
    placeholder: 'MM',
    isError: false,
  },
};
