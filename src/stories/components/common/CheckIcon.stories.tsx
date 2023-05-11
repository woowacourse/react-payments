import type { Meta, StoryObj } from '@storybook/react';

import CheckIcon from '../../../components/common/CheckIcon';

const meta: Meta<typeof CheckIcon> = {
  title: 'components/common/CheckIcon',
  component: CheckIcon,
  decorators: [
    (Story) => (
      <div style={{ width: '420px', margin: '0 auto' }}>
        <div style={{ position: 'relative', width: '180px', height: '180px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CheckIcon>;

export const Default: Story = {};
