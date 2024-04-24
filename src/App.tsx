import './index.css';
import styles from './App.module.css';

import useFormField from './hooks/useAddCardFormField';
import CardNumberInput from './components/AddCardFormInput/CardNumberInput/CardNumberInput';
import CardPreview from './components/CardPreview/CardPreview';
import ExpirationDateInput from './components/AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from './components/AddCardFormInput/OwnerNameInput/OwnerNameInput';
import CardIssuerInput from './components/AddCardFormInput/CardIssuerInput/CardIssuerInput';

import { INITIAL_VALUES } from './constants/form';

function App() {
  const { cardNumbers, expirationDate, ownerName, cardIssuer } = INITIAL_VALUES;
  const cardNumbersProps = useFormField<CardNumbers>({
    initialValues: cardNumbers,
  });
  const expirationDateProps = useFormField<ExpirationDate>({
    initialValues: expirationDate,
  });
  const ownerNameProps = useFormField<OwnerName>({
    initialValues: ownerName,
  });
  const cardIssuerProps = useFormField<CardIssuer>({
    initialValues: cardIssuer,
  });

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>카드 추가</h1>

      <CardPreview
        cardNumbers={Object.values(cardNumbersProps.values)}
        expirationDate={Object.values(expirationDateProps.values)}
        ownerName={Object.values(ownerNameProps.values)}
        cardIssuer={Object.values(cardIssuerProps.values)}
        cvc={Object.values({})}
        password={Object.values({})}
      />

      <form>
        <OwnerNameInput {...ownerNameProps} />
        <ExpirationDateInput {...expirationDateProps} />
        <CardIssuerInput {...cardIssuerProps} />
        <CardNumberInput {...cardNumbersProps} />
      </form>
    </div>
  );
}

export default App;
