import { BrowserRouter } from 'react-router-dom'
import AddPage from 'pages/AddPage'

const Template = () => {
  return (
    <BrowserRouter>
      <AddPage />
    </BrowserRouter>
  )
}

export default {
  title: 'AddPage',
  component: AddPage,
}

export const Default = Template.bind({})
