import { BrowserRouter } from 'react-router-dom'
import { withReactContext } from 'storybook-react-context'
import NickName from 'pages/NickNamePage'

import CardInfoContext from 'context/cardInfo-context'

const Template = () => {
  return (
    <BrowserRouter>
      <NickName />
    </BrowserRouter>
  )
}

const MOCK_DATA = {
  cardInfo: {
    company: '포코',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    dueDate: { month: '12', year: '23' },
    owner: '도리',
    cvc: '123',
    password: { first: '1', second: '2' },
    cardNickName: '',
  },
  isFormFulfilled: true,
}

export default {
  title: 'NickName',
  component: NickName,
  decorators: [
    withReactContext({
      Context: CardInfoContext,
      initialState: MOCK_DATA,
    }),
  ],
}

export const Success = Template.bind({})
