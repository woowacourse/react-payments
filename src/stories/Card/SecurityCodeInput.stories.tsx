import type { Meta, StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';
import { SecurityCodeInput } from '../../components/Input/SecurityCodeInput';

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
