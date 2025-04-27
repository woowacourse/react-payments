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
    expiration: ['', '']
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};

export const Valid: Story = {
  args: {
    expiration: ['31', '12']
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};

export const InValid: Story = {
  args: {
    expiration: ['as', '12']
  },
  render: ({ expiration }) => {
    const [exp, setExp] = useState(expiration);
    return <CardExpirationSection expiration={exp} setExpiration={setExp} />;
  }
};
