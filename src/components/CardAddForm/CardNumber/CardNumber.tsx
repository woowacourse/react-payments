import styles from './style.module.css';
import InputContainer from '../../common/InputContainer/InputContainer';
import Input from '../../common/Input/Input';

interface CardNumberProps {
  onChange: () => void;
}

function CardNumber({ onChange }: CardNumberProps) {
  return (
    <InputContainer label="카드 번호" id="cardNumber">
      <div className={styles.container} tabIndex={0}>
        <Input
          type="text"
          id="cardNumber"
          minLength={4}
          maxLength={4}
          autoComplete="off"
          data-id="0"
          onChange={onChange}
        />
        <Input
          type="text"
          id="cardNumber1"
          minLength={4}
          maxLength={4}
          autoComplete="off"
          data-id="1"
          onChange={onChange}
        />
        <Input
          type="password"
          id="cardNumber2"
          minLength={4}
          maxLength={4}
          autoComplete="off"
          data-id="2"
          onChange={onChange}
        />
        <Input
          type="password"
          id="cardNumber3"
          minLength={4}
          maxLength={4}
          autoComplete="off"
          data-id="3"
          onChange={onChange}
        />
      </div>
    </InputContainer>
  );
}

export default CardNumber;
