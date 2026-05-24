import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    placeholder: '숫자를 입력하세요',
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return <NumberInput {...args} value={value} onChange={setValue} />;
  },
};
