import CardNumberInputBox from './components/CardNumberInputBox/CardNumberInputBox';
import ExpirationDateInputBox from './components/ExpirationDateInputBox/ExpirationDateInputBox';
import OwnerNameInputBox from './components/OwnerNameInputBox/OwnerNameInputBox';
import SecurityCodeInputBox from './components/SecurityCodeInputBox/SecurityCodeInputBox';
import PasswordBoxInput from './components/PasswordInputBox/PasswordInputBox';

function App() {
  return (
    <div className="App">
      <CardNumberInputBox />
      <ExpirationDateInputBox />
      <OwnerNameInputBox />
      <SecurityCodeInputBox />
      <PasswordBoxInput />
    </div>
  );
}

export default App;
