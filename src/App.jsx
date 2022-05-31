import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CardInfoProvider } from 'context/cardInfo-context'

import AddPage from 'pages/AddPage'
import CardListPage from 'pages/CardListPage'
import NickNamePage from 'pages/NickNamePage'

import { PATH } from 'constants'
import theme from 'theme'
import NotFoundPage from 'pages/NotFoundPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardInfoProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={PATH.MAIN} element={<CardListPage />} />
            <Route path={PATH.ADD} element={<AddPage />} />
            <Route path={`${PATH.NICKNAME}/:id`} element={<NickNamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CardInfoProvider>
    </ThemeProvider>
  )
}

export default App
