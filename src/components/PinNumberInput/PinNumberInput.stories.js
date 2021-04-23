import PinNumberInput from './PinNumberInput';

export default {
  title: 'Payments/PasswordInput',
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
