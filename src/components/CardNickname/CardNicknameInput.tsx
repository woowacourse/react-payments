import Input from '../Input/Input';
import { useCardInfoContext } from '../../context/CardInfoContext';
import styles from './CardNicknameInput.module.css';

const CardNicknameInput = () => {
  const { cardNickName, setCardNickName } = useCardInfoContext();

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNickName = e.target.value;
    setCardNickName(inputCardNickName);
  };
  return <Input width="200px" value={cardNickName} onChange={handleNickNameChange} className={styles.input} required />;
};

export default CardNicknameInput;
