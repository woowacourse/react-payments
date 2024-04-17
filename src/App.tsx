import './App.css';
import {
  CardExpirationPeriodForm,
  CardNumbersForm,
  CardUserForm,
} from './components';
import ReducerTest from './modules/ReducerTest';

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <CardNumbersForm />
      <CardExpirationPeriodForm />
      <CardUserForm />
      <div>
        --reducer 테스트--
        <ReducerTest />
      </div>
    </>
  );
}

export default App;
