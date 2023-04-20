import { useState } from 'react';
import { Meta } from '@storybook/react';
import SecurityCode from './SecurityCode';

const meta = {
  component: SecurityCode,
  title: 'Section/SecurityCode',
} satisfies Meta<typeof SecurityCode>;

export default meta;

export const SecurityCodeStory = () => {
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCode
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
};
