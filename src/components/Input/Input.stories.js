import Input from './Input';

export default {
  title: 'Payments/Input',
  component: Input,
  argTypes: {
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

const Template = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: 30,
};
