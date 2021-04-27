import { TransparentInput } from '../../components/commons/input/TransparentInput';

export default {
  title: 'Components/TransparentInput',
  component: TransparentInput,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
  },
};

const Template = args => <TransparentInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: '',
  placeholder: '내용을 입력해주세요.',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: '비밀번호를 입력해주세요.',
};
