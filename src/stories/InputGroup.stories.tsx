import { Meta, StoryObj } from '@storybook/react';
import InputGroup from '../components/common/InputGroup';
import InputBox from '../components/common/InputBox';
import Input from '../components/common/Input';

const meta = {
  title: 'Payment/common/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <InputBox width='100px'>
        <Input type='password' />
      </InputBox>
    ),
    labelValue: '보안 코드(CVC/CVV)',
  },
};

export const Error: Story = {
  args: {
    children: (
      <InputBox width='100px'>
        <Input type='password' />
      </InputBox>
    ),
    labelValue: '보안 코드(CVC/CVV)',
    errorMessage: '에러 발생',
  },
};
