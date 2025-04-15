import "./App.css";
import InputContainer from "./components/InputContainer/InputContainer";

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <section>
      <InputContainer title="임시 타이틀" subTitle="임시 서브 타이틀">
        children 
      </InputContainer>
      </section>
    </>
  );
}

export default App;
