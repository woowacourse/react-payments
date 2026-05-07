import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import CvcField from './CvCField';

const meta = {
  title: 'feature/CardRegister/components/CvcField',
  component: CvcField,
  tags: ['autodocs'],
  args: {
    cvcNumber: '',
    setCvcNumber: fn(),
    setIsError: fn(),
  },
} satisfies Meta<typeof CvcField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    cvcNumber: '123',
  },
};

export const Interactive: Story = {
  render: function InteractiveCvcField(args) {
    const [cvcNumber, setCvcNumber] = useState(args.cvcNumber);

    return <CvcField {...args} cvcNumber={cvcNumber} setCvcNumber={setCvcNumber} />;
  },
};
