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
    cvc: ''
  },
  render: ({ cvc: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};

export const Valid: Story = {
  args: {
    cvc: '314'
  },
  render: ({ cvc: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};

export const InValid: Story = {
  args: {
    cvc: 'a2'
  },
  render: ({ cvc: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};
