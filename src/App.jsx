import AddPage from './pages/AddPage'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddPage />
    </ThemeProvider>
  )
}

export default App
