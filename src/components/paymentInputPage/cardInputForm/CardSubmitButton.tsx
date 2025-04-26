import { useNavigate } from 'react-router-dom';
import Button from '../../common/button/Button';
import styles from './CardInputForm.module.css';
import { ROUTER } from '../../../global/constants';

interface CardSubmitButtonProps {
  isFormValid: boolean;
}

function CardSubmitButton({ isFormValid }: CardSubmitButtonProps) {
  const navigate = useNavigate();

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (isFormValid) {
      navigate(ROUTER.registerComplete);
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
