import Header from 'components/Header'
import Button from 'components/Button'
import { ReactComponent as Arrow } from 'assets/arrow.svg'

const Template = (args) => <Header {...args} />

export default {
  title: 'Header',
  component: Header,
}

export const AddCardHeader = Template.bind({})
AddCardHeader.args = {
  children: (
    <>
      <Button>
        <Arrow />
      </Button>
      <h2>카드 추가</h2>
    </>
  ),
}
