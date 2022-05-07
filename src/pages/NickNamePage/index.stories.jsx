import { BrowserRouter } from 'react-router-dom'
import { withReactContext } from 'storybook-react-context'
import CardAddCompletePage from 'pages/NickNamePage'

import CardInfoContext from 'store/cardInfo-context'

const Template = () => {
  return (
    <BrowserRouter>
      <CardAddCompletePage />
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
  isFieldFulfilled: true,
}

export default {
  title: 'CardAddCompletePage',
  component: CardAddCompletePage,
  decorators: [
    withReactContext({
      Context: CardInfoContext,
      initialState: MOCK_DATA,
    }),
  ],
}

export const Success = Template.bind({})
