import Button from '../../common/button/Button';
import styles from './CardInputForm.module.css';

function CardSubmitButton() {
  return (
    <Button
      type='button'
      name='CardSubmitButton'
      title='확인'
      className={`${styles.submitButton}`}
    />
  );
}

export default CardSubmitButton;
