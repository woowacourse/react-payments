import { FormContext } from '../../contexts/useFormContext';
import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { useFormState } from '../../hooks/useFormState';
import { CardForm } from '../../components/CardForm/CardForm';

export default function HomePage() {
  const formState = useFormState();

  return (
    <FormContext.Provider value={formState}>
      <div className={styles.wrapper}>
        <CardPreview />
        <Spacing size={45} />
        <CardForm />
      </div>
    </FormContext.Provider>
  );
}
