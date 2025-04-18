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
  render: ({ cardNumbers: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};

export const Valid: Story = {
  args: {
    cardNumbers: '314'
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};

export const InValid: Story = {
  args: {
    cardNumbers: 'a2'
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cvc, setCvc] = useState(initialNumbers);

    return <CvcSection cvc={cvc} setCvc={setCvc} />;
  }
};
