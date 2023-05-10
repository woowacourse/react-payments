import type { Meta, StoryObj } from '@storybook/react';

import ExpirationDateBox from '../components/ExpirationDateBox/ExpirationDateBox';

const meta: Meta<typeof ExpirationDateBox> = {
  title: 'Components/ExpirationDateBox',
  component: ExpirationDateBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExpirationDateBox>;

export const Default: Story = {};
