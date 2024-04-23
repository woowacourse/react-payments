import './index.css';
import styles from './App.module.css';

import useFormField from './hooks/useAddCardFormField';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import CardPreview from './components/CardPreview/CardPreview';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from './components/OwnerNameInput/OwnerNameInput';

import { INITIAL_VALUES } from './constants/form';

function App() {
  const { values: cardNumbers, ...cardNumbersProps } =
    useFormField<CardNumbers>({
      initialValues: INITIAL_VALUES.cardNumbers,
    });
  const { values: expirationDate, ...expirationDateProps } =
    useFormField<ExpirationDate>({
      initialValues: INITIAL_VALUES.expirationDate,
    });
  const { values: ownerName, ...ownerNameProps } = useFormField<OwnerName>({
    initialValues: INITIAL_VALUES.ownerName,
  });

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>카드 추가</h1>

      <CardPreview
        cardNumbers={Object.values(cardNumbers)}
        expirationDate={Object.values(expirationDate)}
        ownerName={Object.values({})}
        cardIssuer={Object.values({})}
        cvc={Object.values({})}
        password={Object.values({})}
      />

      <form>
        <CardNumberInput {...{ cardNumbers, ...cardNumbersProps }} />
        <ExpirationDateInput {...{ expirationDate, ...expirationDateProps }} />
        <OwnerNameInput {...{ ownerName, ...ownerNameProps }} />
      </form>
    </div>
  );
}

export default App;
