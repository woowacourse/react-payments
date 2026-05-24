import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PasswordSection from './PasswordSection';

const meta: Meta<typeof PasswordSection> = {
  title: 'Payments/PasswordSection',
  component: PasswordSection,
};

export default meta;
type Story = StoryObj<typeof PasswordSection>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    return <PasswordSection value={value} setValue={setValue} />;
  },
};

// 1자리 입력
export const OneFilled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('1');
    return <PasswordSection value={value} setValue={setValue} />;
  },
};

// 2자리 입력
export const TwoFilled: Story = {
  render: () => {
    const [value, setValue] = useState<string>('12');
    return <PasswordSection value={value} setValue={setValue} />;
  },
};
