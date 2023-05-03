import Input from '../Input/Input';
import styles from './CardNicknameInput.module.css';
import { useCardStore } from '../../hook/useCardState';

const CardNicknameInput = () => {
  const { get, setCardNickName } = useCardStore();
  const cardNickName = get().cardNickName;

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNickName = e.target.value;
    setCardNickName(inputCardNickName);
  };
  return <Input width="200px" value={cardNickName} onChange={handleNickNameChange} className={styles.input} required />;
};

export default CardNicknameInput;
