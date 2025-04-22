import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardExpirationSection from './CardExpirationSection';

const meta: Meta<typeof CardExpirationSection> = {
  title: 'CardExpirationSection',
  component: CardExpirationSection
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expiration: { month: '', year: '' }
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};

export const Valid: Story = {
  args: {
    expiration: { month: '12', year: '28' }
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};

export const InValid: Story = {
  args: {
    expiration: { month: 'aq', year: '12' }
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};
