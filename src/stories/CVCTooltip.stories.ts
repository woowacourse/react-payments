import type { Meta, StoryObj } from '@storybook/react';
import CVCTooltip from '../components/CVCTooltip';

const meta: Meta<typeof CVCTooltip> = {
  title: 'CVCTooltip',
  component: CVCTooltip,
};

export default meta;
type Story = StoryObj<typeof CVCTooltip>;

export const Primary: Story = {};
