import type { Meta, Story } from '@storybook/react';
import InputGroup from '../components/common/InputGroup';
import InputBox from '../components/common/InputBox';
import Input from '../components/common/Input';

interface InputGroupProps {
  children: React.ReactNode;
  labelValue: string | React.ReactElement;
  errorMessage?: string;
}

const meta = {
  title: 'Payment/common/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof InputGroup>;

const Template: Story<InputGroupProps> = (args) => {
  return (
    <InputGroup {...args}>
      <InputBox width='100px' style={{ background: '#ecebf1' }}>
        <Input type='password' />
      </InputBox>
    </InputGroup>
  );
};

export const Default = Template.bind({});
Default.args = {
  labelValue: '보안 코드(CVC/CVV)',
};

export const Error = Template.bind({});
Error.args = {
  labelValue: '보안 코드(CVC/CVV)',
  errorMessage: '에러 발생',
};

export default meta;
