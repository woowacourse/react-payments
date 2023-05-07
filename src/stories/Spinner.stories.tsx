import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '../components/common/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'components/common/Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <div style={{ width: '180px', height: '180px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
