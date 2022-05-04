import InputBox from 'components/common/InputBox'

const Template = (args) => <InputBox {...args} />

export default {
  title: 'InputBox',
  component: InputBox,
}

export const CardNumberInputBox = Template.bind({})
CardNumberInputBox.args = {
  size: 100,
  inputInfo: [
    {
      type: 'number',
      id: 'first-card-number',
    },
    {
      type: 'number',
      id: 'second-card-number',
    },
    {
      type: 'number',
      id: 'third-card-number',
    },
    {
      type: 'number',
      id: 'fourth-card-number',
    },
  ],
}

export const CardDueDateInputBox = Template.bind({})
CardDueDateInputBox.args = {
  size: 50,
  inputInfo: [
    {
      type: 'number',
      id: 'due-month',
      placeholder: 'MM',
      key: 'month',
    },
    {
      type: 'number',
      id: 'due-year',
      placeholder: 'YY',
      key: 'year',
    },
  ],
}

export const CardOwnerInputBox = Template.bind({})
CardOwnerInputBox.args = {
  size: 100,
  inputInfo: [
    {
      type: 'string',
      id: 'owner',
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    },
  ],
}

export const CardCVCInputBox = Template.bind({})
CardCVCInputBox.args = {
  size: 30,
  inputInfo: [{ type: 'password', id: 'cvc' }],
}

export const CardPasswordInputBox = Template.bind({})
CardPasswordInputBox.args = {
  size: 12,
  inputInfo: [{ type: 'password', id: 'password' }],
}
