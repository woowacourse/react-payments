import type { Meta, Story } from '@storybook/react';
import InputBox from '../components/common/InputBox';

const meta = {
  title: 'Payment/common/InputBox',
  component: InputBox,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof InputBox>;

const Template: Story = (args) => {
  return <InputBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  isError: false,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
};

export default meta;
