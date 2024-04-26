import styles from './App.module.css';
import './index.css';

import CardIssuerInput from './components/AddCardFormInput/CardIssuerInput/CardIssuerInput';
import CardNumberInput from './components/AddCardFormInput/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from './components/AddCardFormInput/OwnerNameInput/OwnerNameInput';
import CardPreview from './components/CardPreview/CardPreview';
import useAddCardFormField from './hooks/useAddCardFormField';

import CVCInput from './components/AddCardFormInput/CVCInput/CVCInput';
import PasswordInput from './components/AddCardFormInput/PasswordInput/PasswordInput';
import { INITIAL_VALUES } from './constants/form';

function App() {
  const cardNumbersProps = useAddCardFormField<CardNumbers>({
    initialValues: INITIAL_VALUES.cardNumbers,
  });
  const expirationDateProps = useAddCardFormField<ExpirationDate>({
    initialValues: INITIAL_VALUES.expirationDate,
  });
  const ownerNameProps = useAddCardFormField<OwnerName>({
    initialValues: INITIAL_VALUES.ownerName,
  });
  const cardIssuerProps = useAddCardFormField<CardIssuer>({
    initialValues: INITIAL_VALUES.cardIssuer,
  });
  const cvcProps = useAddCardFormField<CVC>({
    initialValues: INITIAL_VALUES.cvc,
  });
  const passwordProps = useAddCardFormField<Password>({
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
        cvc={Object.values(cvcProps.values)}
        password={Object.values(passwordProps.values)}
      />

      <form>
        {cvcProps.showNextField && <PasswordInput {...passwordProps} />}
        {ownerNameProps.showNextField && <CVCInput {...cvcProps} />}
        {expirationDateProps.showNextField && (
          <OwnerNameInput {...ownerNameProps} />
        )}
        {cardIssuerProps.showNextField && (
          <ExpirationDateInput {...expirationDateProps} />
        )}
        {cardNumbersProps.showNextField && (
          <CardIssuerInput {...cardIssuerProps} />
        )}
        <CardNumberInput {...cardNumbersProps} />
      </form>
    </div>
  );
}

export default App;
