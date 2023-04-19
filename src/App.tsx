import CardNumberBox from './components/CardNumberBox/CardNumberBox';
import ExpirationDateInputBox from './components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from './components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from './components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordBox from './components/PasswordBox/PasswordBox';

function App() {
  return (
    <div className="App">
      <CardNumberBox />
      <ExpirationDateInputBox />
      <OwnerNameInputBox />
      <SecurityCodeInputBox />
      <PasswordBox />
    </div>
  );
}

export default App;
