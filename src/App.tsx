import './reset.css';
import AddCard from './pages/AddCard';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AddCard />
    </ThemeProvider>
  );
}

export default App;
