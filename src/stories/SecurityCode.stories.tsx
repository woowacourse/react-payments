import { Meta, StoryObj } from '@storybook/react';
import SecurityCode from '../components/SecurityCode/SecurityCode';

const meta = {
  component: SecurityCode,
  title: 'Section/SecurityCode',
} satisfies Meta<typeof SecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    securityCode: '000',
    isSetSecurityCode: () => true,
  },
};
