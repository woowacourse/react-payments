import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import CvcField from '../../../../../feature/CardRegister/components/InfoInputSection/CvCField';

const meta = {
  title: 'feature/CardRegister/components/CvcField',
  component: CvcField,
  tags: ['autodocs'],
  args: {
    cvcNumber: '',
    handleCvcNumberChange: fn(),
  },
} satisfies Meta<typeof CvcField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    cvcNumber: '123',
    handleCvcNumberChange: fn(),
  },
};

export const Interactive: Story = {
  args: {
    cvcNumber: '',
    handleCvcNumberChange: fn(),
  },
  render: function InteractiveCvcField(args) {
    const [cvcNumber, setCvcNumber] = useState(args.cvcNumber);

    return (
      <CvcField
        {...args}
        cvcNumber={cvcNumber}
        handleCvcNumberChange={setCvcNumber}
      />
    );
  },
};
