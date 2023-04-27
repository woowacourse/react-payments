import { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/common/InputField';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'InputField',
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    text: '보안 코드(CVC/CVV)',
  },
};

export const LengthOption: Story = {
  args: {
    text: '보안 코드(CVC/CVV)',
    inputLength: '0/30',
  },
};
