import './App.css';
import CardNumbersInputSection from './components/InputSection/CardNumbersInputSection';
import ErrorMessage from './components/ErrorMessage';
import InputField from './components/InputField';
import InputSection from './components/InputSection/InputSection';
import useCardExpirationDate from './hooks/useCardExpirationDate';
import CardCVCNumberInputSection from './components/InputSection/CardCVCNumberInputSection';
import styles from './css/cardForm.module.css';

const CardExpirationDateInputSection = () => {
  const { cardExpirationDate, setCardExpirationDate, isError, errorMessage } =
    useCardExpirationDate();

  return (
    <InputSection
      title="카드 유효기간을 입력해 주세요"
      description="월/년도(MM/YY) 순서대로 입력해 주세요"
      subtitle="유효기간"
    >
      <InputField
        value={cardExpirationDate.month}
        onChange={setCardExpirationDate('month')}
        isError={isError.month}
      ></InputField>
      <InputField
        value={cardExpirationDate.year}
        onChange={setCardExpirationDate('year')}
        isError={isError.year}
      ></InputField>
      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <div className={styles.cardForm}>
        <CardNumbersInputSection />
        <CardExpirationDateInputSection />
        <CardCVCNumberInputSection />
      </div>
    </>
  );
}

export default App;
