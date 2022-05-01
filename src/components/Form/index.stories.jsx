import { OWNER } from '../../constant'
import Form from './'

const Template = (args) => <Form {...args} />

export default {
  title: 'Form',
  component: Form,
}

export const CardNumberForm = Template.bind({})
CardNumberForm.args = {
  label: '카드 번호',
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

export const DueDateForm = Template.bind({})
DueDateForm.args = {
  label: '만료일',
  size: 50,
  inputInfo: [
    {
      type: 'number',
      id: 'due-month',
    },
    {
      type: 'number',
      id: 'due-year',
    },
  ],
}

export const CardOwnerForm = Template.bind({})
CardOwnerForm.args = {
  label: '카드 소유자 이름 (선택)',
  countHelper: OWNER.MAX_LENGTH,
  inputInfo: [
    {
      type: 'string',
      id: 'owner',
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    },
  ],
}

export const CardCvcForm = Template.bind({})
CardCvcForm.args = {
  label: '보안 코드(CVC/CVV)',
  size: 30,
  questionHelper: true,
  inputInfo: [
    {
      type: 'password',
      id: 'cvc',
    },
  ],
}
