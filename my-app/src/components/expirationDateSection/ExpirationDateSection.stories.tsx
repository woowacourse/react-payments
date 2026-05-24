import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDateSection from './ExpirationDateSection';

const meta: Meta<typeof ExpirationDateSection> = {
  title: 'Components/ExpirationDateSection',
  component: ExpirationDateSection,
};

export default meta;
type Story = StoryObj<typeof ExpirationDateSection>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState({ month: '', year: '' });

    return <ExpirationDateSection value={value} setValue={setValue} />;
  },
};
