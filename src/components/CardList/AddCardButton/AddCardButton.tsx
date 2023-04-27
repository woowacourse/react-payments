import React from 'react';
import styles from './AddCardButton.module.css';
import { GrAdd } from 'react-icons/gr';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardInfoContext } from '../../../CardInfoProvider';

type AddCardButtonProps = {
  showMessage: boolean;
};

const AddCardButton = ({ showMessage }: AddCardButtonProps) => {
  const navigate = useNavigate();
  const { reset } = useContext(CardInfoContext);

  const moveToRegistrationPage = () => {
    reset();
    navigate('/card-registration');
  };

  return (
    <div className={styles.container}>
      {showMessage && <p className={styles.title}>새로운 카드를 등록해주세요.</p>}
      <button className={styles.card} onClick={moveToRegistrationPage}>
        <GrAdd />
      </button>
    </div>
  );
};

export default React.memo(AddCardButton);
