import InputBox from './InputBox';

export default {
  title: 'Payments/InputBox',
  component: InputBox,
  argTypes: {
    labelText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    maxLength: {
      control: 'number',
    },
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'number'],
      },
    },
    value: {
      control: 'text',
    },
  },
};

const Template = (args) => <InputBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  labelText: '카드 번호',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: 30,
  hasLabelText: true,
  hasLengthCounter: true,
};
