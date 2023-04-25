import type { Meta, StoryObj } from '@storybook/react';

import InputCardData from '../components/InputCardData';

const meta: Meta<typeof InputCardData> = {
  title: 'InputCardData',
  component: InputCardData,
};

export default meta;
type Story = StoryObj<typeof InputCardData>;

export const Primary: Story = {
  args: {
    value: '하이',
    onChange: (e) => {},
    className: 'asdf',
  },
};
