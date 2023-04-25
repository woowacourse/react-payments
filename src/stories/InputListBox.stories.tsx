import InputListBox from '../components/Common/Input/InputListBox';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof InputListBox>;

const meta: Meta<typeof InputListBox> = {
  title: 'InputListBox',
  component: InputListBox,
};

export default meta;

export const Default: Story = {
  args: {
    inputInformation: [{ resetStyle: false }, { resetStyle: false }],
    getInputListValue: () => {},
  },
};

export const UseBridge: Story = {
  args: {
    inputInformation: [{}, {}],
    bridgeLetter: '-',
    getInputListValue: () => {},
  },
};

export const cardNumber: Story = {
  args: {
    inputInformation: [
      { type: 'string', maxLength: 4 },
      { type: 'string', maxLength: 4 },
      { type: 'password', maxLength: 4 },
      { type: 'password', maxLength: 4 },
    ],
    bridgeLetter: '-',
    getInputListValue: () => {},
  },
};
