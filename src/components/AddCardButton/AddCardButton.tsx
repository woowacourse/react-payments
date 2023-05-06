import styles from './AddCardButton.module.css';
import { GrAdd } from 'react-icons/gr';
import { Link } from 'react-router-dom';

type AddCardButtonProps = {
  showMessage: boolean;
};

const AddCardButton = ({ showMessage }: AddCardButtonProps) => {
  return (
    <section className={styles.container}>
      {showMessage && <h3 className={styles.title}>새로운 카드를 등록해주세요.</h3>}
      <Link to="/card-registration">
        <button className={styles.card}>
          <GrAdd />
        </button>
      </Link>
    </section>
  );
};

export default AddCardButton;
