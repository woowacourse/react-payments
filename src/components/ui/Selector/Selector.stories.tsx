import type { Meta, StoryObj } from '@storybook/react';

import Selector from './Selector';

const meta: Meta<typeof Selector> = {
  title: 'components/Selector',
  component: Selector,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Selector>;

const dropDownOptions = ['options1', 'options2', 'options3', 'options4'];

export const Default: Story = {
  args: {
    dropDownOptions: dropDownOptions,
    placeholder: '옵션을 선택해주세요',
    onSelectChange: () => {},
    ref: null,
  },
  render: function Render(args) {
    return <Selector {...args} />;
  },
};
