import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { useFormState } from '../../hooks/useFormState';
import { CardForm } from '../../components/CardForm/CardForm';

export default function HomePage() {
  const formState = useFormState();

  return (
    <div className={styles.wrapper}>
      <CardPreview cardNumbers={formState.cardNumbers} company={formState.company} expiration={formState.expiration} />
      <Spacing size={45} />
      <CardForm formState={formState} />
    </div>
  );
}
