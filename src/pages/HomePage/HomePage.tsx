import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { CardForm } from '../../components/CardForm/CardForm';
import useValues from '../../hooks/useValues';

export default function HomePage() {
  const { preview, cardForm } = useValues();
  return (
    <div className={styles.wrapper}>
      <CardPreview {...preview} />
      <Spacing size={45} />
      <CardForm {...cardForm} />
    </div>
  );
}
