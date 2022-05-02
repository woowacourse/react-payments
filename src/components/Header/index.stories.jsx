import Header from 'components/Header'

const Template = (args) => <Header {...args} />

export default {
  title: 'Header',
  component: Header,
}

export const AddCardHeader = Template.bind({})
AddCardHeader.args = {
  backButton: true,
  headerText: '카드 추가',
}
