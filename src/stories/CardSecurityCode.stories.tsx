import { Meta, StoryObj } from '@storybook/react';
import CardSecurityCode from '../components/CardSecurityCode/CardSecurityCode';

const meta = {
  component: CardSecurityCode,
  title: 'Section/SecurityCode',
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    securityCode: '000',
    isSetSecurityCode: () => true,
  },
};
