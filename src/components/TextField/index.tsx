import { ChangeEventHandler, useState } from 'react';

import styles from './textField.module.css';

const TextField = () => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (Number.isNaN(Number(e.target.value))) return;
    if (e.target.value === ' ') return;

    setCardNumber(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="card-number">카드 번호</label>
      <input
        className={styles.input}
        id="card-number"
        type="text"
        required
        maxLength={16}
        value={cardNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
