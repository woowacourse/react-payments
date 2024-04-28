import { generateArgTypes } from '@utils/generateArgTypes';
import OwnerNameInput from './OwnerNameInput';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';

const meta = {
  title: 'Payments/OwnerNameInput',
  component: OwnerNameInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      const onAddOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

      return <Story args={{ ...context.args, value, onAddOwnerName }} />;
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
    onAddOwnerName: {
      ...generateArgTypes({ control: 'object' }),
      description: 'OwnerNameInput의 이벤트 핸들러',
    },
  },
  args: {
    onAddOwnerName: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '소유자 이름 Input',
      },
    },
  },
  args: {
    value: '',
    isError: false,
  },
};
