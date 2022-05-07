import { BrowserRouter } from 'react-router-dom'
import AddPage from 'pages/AddPage'

import { CardInfoProvider } from 'store/cardInfo-context'

const Template = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <AddPage />
      </CardInfoProvider>
    </BrowserRouter>
  )
}

export default {
  title: 'AddPage',
  component: AddPage,
}

export const Default = Template.bind({})
