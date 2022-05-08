import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CardInfoProvider } from 'context/cardInfo-context'

import AddPage from 'pages/AddPage'
import CardListPage from 'pages/CardListPage'
import NickNamePage from 'pages/NickNamePage'

import theme from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CardInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="react-payments" element={<CardListPage />} />
            <Route path="react-payments/add" element={<AddPage />} />
            <Route
              path="react-payments/nickname/:id"
              element={<NickNamePage />}
            />
            <Route
              path="*"
              element={
                <main>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </CardInfoProvider>
    </ThemeProvider>
  )
}

export default App
