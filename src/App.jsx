import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AddPage from 'pages/AddPage'
import CardListPage from 'pages/CardListPage'
import CardAddCompletePage from 'pages/CardAddCompletePage'

import theme from 'theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="complete" element={<CardAddCompletePage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
