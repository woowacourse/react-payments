import Button from '../../common/button/Button';
import styles from './CardInputForm.module.css';

interface CardSubmitButtonProps {
  isFormValid: boolean;
}

function CardSubmitButton({ isFormValid }: CardSubmitButtonProps) {
  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (isFormValid) {
      // router로 확인 페이지 넘어가기
    }
  }

  return (
    <Button
      type='button'
      name='CardSubmitButton'
      handleButtonClick={handleButtonClick}
      title='확인'
      className={`${styles.submitButton}`}
    />
  );
}

export default CardSubmitButton;
