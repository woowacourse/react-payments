import PasswordForm from '.'

const Template = (args) => <PasswordForm {...args} />

export default {
  title: 'PasswordForm',
  component: PasswordForm,
}

export const TwoPasswordForm = Template.bind({})
TwoPasswordForm.args = {
  label: '카드 비밀번호',
  size: 12,
  inputInfo: [
    { type: 'password', id: 'first-password' },
    { type: 'password', id: 'second-password' },
  ],
}
