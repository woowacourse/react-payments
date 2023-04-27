import InputListBox from '../components/Common/Input/InputListBox';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof InputListBox>;

const meta: Meta<typeof InputListBox> = {
  title: 'InputListBox',
  component: InputListBox,
};

export default meta;

export const TwoInput: Story = {
  args: {
    inputInformation: [{ resetStyle: false }, { resetStyle: false }],
    getInputListValue: () => {},
  },
};

export const UseBridge: Story = {
  args: {
    inputInformation: [{ resetStyle: false }, { resetStyle: false }],
    bridgeLetter: '-',
    getInputListValue: () => {},
  },
};
