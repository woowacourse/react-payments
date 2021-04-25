import PinNumberInput from './PinNumberInput';

export default {
  title: 'Payments/PinNumberInput',
  component: PinNumberInput,
  argTypes: {
    labelText: { control: 'text' },
  },
};

const Template = (args) => <PinNumberInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  labelText: '카드 비밀번호',
};

export const Error = Template.bind({});
Error.args = {
  labelText: '카드 비밀번호',
  isError: true,
  errorMessage: '유효한 비밀번호를 입력해주세요',
};
