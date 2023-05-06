import type { Meta, StoryFn } from '@storybook/react';
import { SecurityCodeInput } from 'components/Input';
import { useRef, useState } from 'react';

const meta = {
  title: 'Payments/Card/SecurityCodeInput',
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;
type Story = StoryFn<typeof meta>;

export const SecurityCode: Story = () => {
  const securityCodeInputRef = useRef(null);
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCodeInput
      securityCodeInputRef={securityCodeInputRef}
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
};
