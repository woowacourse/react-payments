import React, { useRef, useState } from 'react';

import type { Meta } from '@storybook/react';

import { SecurityCodeInput } from '../../components/input/SecurityCodeInput';

const meta = {
  title: 'Example/Input',
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

export const SecurityCode = () => {
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCodeInput
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
      focusFirstSecurityCodeInput={() => {}}
      viewNextInput={() => {}}
      viewPreviousInput={() => {}}
    />
  );
};
