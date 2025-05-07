import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CvcSection from './CvcSection';

const meta: Meta<typeof CvcSection> = {
  title: 'CvcSection',
  component: CvcSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cvc: '',
    cvcError: ''
  },
  render: ({ cvc: initialCvc }) => {
    const [cvc, setCvc] = useState(initialCvc);
    const [cvcError, setCvcError] = useState('');

    const handleCvcChange = (_: string, value: string) => {
      setCvc(value);
      setCvcError('');
    };

    return <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} cvcError={cvcError} />;
  }
};

export const Valid: Story = {
  args: {
    cvc: '314',
    cvcError: ''
  },
  render: ({ cvc: initialCvc }) => {
    const [cvc, setCvc] = useState(initialCvc);
    const [cvcError, setCvcError] = useState('');

    const handleCvcChange = (_: string, value: string) => {
      setCvc(value);
      setCvcError('');
    };

    return <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} cvcError={cvcError} />;
  }
};

export const InValid: Story = {
  args: {
    cvc: 'a2',
    cvcError: '숫자만 입력해 주세요.'
  },
  render: ({ cvc: initialCvc, cvcError: initialError }) => {
    const [cvc, setCvc] = useState(initialCvc);
    const [cvcError, setCvcError] = useState(initialError);

    const handleCvcChange = (_: string, value: string) => {
      setCvc(value);
      setCvcError('');
    };

    return <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} cvcError={cvcError} />;
  }
};
