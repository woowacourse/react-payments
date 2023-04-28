import type { Meta, StoryObj } from '@storybook/react';

import InputCardData from '../components/InputCardData';

const meta: Meta<typeof InputCardData> = {
  title: 'InputCardData',
  tags: ['autodocs'],
  component: InputCardData,
};

export default meta;
type Story = StoryObj<typeof InputCardData>;

export const Primary: Story = {
  args: {
    value: '입력값!',
    onChange: (e) => {},
    className: 'asdf',
  },
};

export const Primary2: Story = {
  args: {
    value: '1234',
    required: true,
    inputType: 'number',
    className: 'card-number',
    minDataLength: 4,
    maxDataLength: 4,
    name: 'first',
    dataId: 0,
  },
};

export const Primary3: Story = {
  args: {
    value: '1234',
    required: true,
    inputType: 'password',
    className: 'card-password',
    minDataLength: 4,
    maxDataLength: 4,
    name: 'third',
    dataId: 2,
  },
};
