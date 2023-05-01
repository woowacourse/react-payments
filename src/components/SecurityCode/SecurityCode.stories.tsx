import { Meta } from '@storybook/react';
import { useRef } from 'react';
import SecurityCode, { SecurityCodeProps } from './SecurityCode';

const meta = {
  component: SecurityCode,
  title: 'Section/SecurityCode',
} satisfies Meta<typeof SecurityCode>;

export default meta;

export const SecurityCodeStory = (args: SecurityCodeProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <SecurityCode {...args} ref={ref} />;
};

SecurityCodeStory.args = {
  securityCode: '000',
};
