import AddCardForm from './components/AddCardForm/AddCardForm';
import { AddCardFormProvider } from './context/AddCardFormContext';
import './index.css';

function App() {
  return (
    <div>
      <AddCardFormProvider>
        <AddCardForm />
      </AddCardFormProvider>
    </div>
  );
}

export default App;
