import './index.css';
import styles from './App.module.css';

import useFormField from './hooks/useAddCardFormField';
import CardNumberInput from './components/AddCardFormInput/CardNumberInput/CardNumberInput';
import CardPreview from './components/CardPreview/CardPreview';
import ExpirationDateInput from './components/AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from './components/AddCardFormInput/OwnerNameInput/OwnerNameInput';
import CardIssuerInput from './components/AddCardFormInput/CardIssuerInput/CardIssuerInput';

import { INITIAL_VALUES } from './constants/form';
import CVCInput from './components/AddCardFormInput/CVCInput/CVCInput';
import PasswordInput from './components/AddCardFormInput/PasswordInput/PasswordInput';

function App() {
  const cardNumbersProps = useFormField<CardNumbers>({
    initialValues: INITIAL_VALUES.cardNumbers,
  });
  const expirationDateProps = useFormField<ExpirationDate>({
    initialValues: INITIAL_VALUES.expirationDate,
  });
  const ownerNameProps = useFormField<OwnerName>({
    initialValues: INITIAL_VALUES.ownerName,
  });
  const cardIssuerProps = useFormField<CardIssuer>({
    initialValues: INITIAL_VALUES.cardIssuer,
  });
  const cvcProps = useFormField<CVC>({
    initialValues: INITIAL_VALUES.cvc,
  });
  const passwordProps = useFormField<Password>({
    initialValues: INITIAL_VALUES.password,
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
        <PasswordInput {...passwordProps} />
        <CVCInput {...cvcProps} />
        <OwnerNameInput {...ownerNameProps} />
        <ExpirationDateInput {...expirationDateProps} />
        <CardIssuerInput {...cardIssuerProps} />
        <CardNumberInput {...cardNumbersProps} />
      </form>
    </div>
  );
}

export default App;
