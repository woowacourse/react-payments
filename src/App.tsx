import './App.css';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';

// 카드 번호만 관리하는 form 만들기
function App() {
  return (
    <>
      <CardNumberInput />
      <ExpirationDateInput />
    </>
  );
}

export default App;
