import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CardInfoProvider } from 'context/cardInfo-context'

import AddPage from 'pages/AddPage'
import CardListPage from 'pages/CardListPage'
import NickNamePage from 'pages/NickNamePage'

import { PATH } from 'constant'
import theme from 'theme'
import NotFoundPage from 'pages/NotFoundPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path={PATH.MAIN} element={<CardListPage />} />
            <Route path={PATH.ADD} element={<AddPage />} />
            <Route path={PATH.NICKNAME} element={<NickNamePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CardInfoProvider>
    </ThemeProvider>
  )
}

export default App
