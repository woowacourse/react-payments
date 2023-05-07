import type { Meta, StoryObj } from '@storybook/react';

import SecurityCodeBox from '../components/SecurityCodeBox/SecurityCodeBox';

const meta: Meta<typeof SecurityCodeBox> = {
  title: 'Components/SecurityCodeBox',
  component: SecurityCodeBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SecurityCodeBox>;

export const Default: Story = {};
