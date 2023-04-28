import { useContext } from 'react';
import Input from '../Input/Input';
import { CardInfoContext } from '../../context/CardInfoContext';
import styles from './CardNicknameInput.module.css';

const CardNicknameInput = () => {
  const { cardNickName, setCardNickName } = useContext(CardInfoContext);

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNickName = e.target.value;
    setCardNickName(inputCardNickName);
  };
  return <Input width="200px" value={cardNickName} onChange={handleNickNameChange} className={styles.input} />;
};

export default CardNicknameInput;
