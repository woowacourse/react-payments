import './App.css';
import Input from './components/common/Input';
import useForm from './hooks/useForm';

// 카드 번호만 관리하는 form 만들기
interface CardNumberInputs {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

function App() {
  const { values, handleChange } = useForm<CardNumberInputs>({
    initialValues: { first: '', second: '', third: '', fourth: '' },
  });

  return (
    <>
      <Input
        name="first"
        placeholder="1234"
        value={values.first}
        handleChange={handleChange}
      ></Input>
      <Input
        name="second"
        placeholder="1234"
        value={values.second}
        handleChange={handleChange}
      ></Input>
      <Input
        name="third"
        placeholder="1234"
        value={values.third}
        handleChange={handleChange}
      ></Input>
      <Input
        name="fourth"
        placeholder="1234"
        value={values.fourth}
        handleChange={handleChange}
      ></Input>
    </>
  );
}

export default App;
