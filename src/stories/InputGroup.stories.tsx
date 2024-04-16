import type { Meta, StoryObj } from '@storybook/react';
import InputGroup from '../components/InputGroup';

const meta = {
  title: 'InputGroup',
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
