import CardNumberInput from './CardNumberInput';

export default {
  title: 'Payments/CardNumberInput',
  component: CardNumberInput,
  argTypes: {
    labelText: { control: 'text' },
  },
};

const Template = (args) => <CardNumberInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  labelText: '카드 번호 입력',
  values: ['', '', '', ''],
  maskedInputFlags: [false, false, true, true],
  isError: false,
  errorMessage: '',
};
