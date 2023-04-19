import { Link } from 'react-router-dom';
import styles from './NextButton.module.css';

const NextButton = () => {
  return (
    <Link to="/">
      <button className={styles.button}>다음</button>
    </Link>
  );
};

export default NextButton;
