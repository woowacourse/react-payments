import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";
import CardExpiryInput from "./components/CardExpiryInput/CardExpiryInput";
import CVCInput from "./components/CVCInput/CVCInput";
import './App.css'
// import styles from './App.module.css'

function App() {

  return (
    <div className='app'>
      <div>Preview</div>
      <form>
        <CardNumbersInput /> 
        <CardExpiryInput/>
        <CVCInput/>
      </form>
    </div>
  );
}

export default App;
