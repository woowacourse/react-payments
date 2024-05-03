import { Meta, StoryObj } from '@storybook/react';

import CVCInput from './index';

const meta: Meta<typeof CVCInput> = {
  title: 'CardInput Container',
  component: CVCInput,
  args: {},
};

export default meta;

type Story = StoryObj<typeof CVCInput>;

export const CVC: Story = {};
