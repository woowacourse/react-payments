import { BsQuestionCircle } from 'react-icons/bs';
import styles from './HelpButton.module.css';

type HelpButtonProps = {
  message: string;
};

const HelpButton = ({ message }: HelpButtonProps) => {
  const showMessage = () => {
    alert(message);
  };

  return (
    <div className={styles.container}>
      <BsQuestionCircle className={styles.button} onClick={showMessage} />
    </div>
  );
};

export default HelpButton;
