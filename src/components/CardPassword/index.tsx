import { ChangeEvent, useState } from 'react';

import {
  CARD_PASSWORD,
  CARD_PASSWORD_MESSAGE,
  CARD_PASSWORD_REGEXP,
  ERROR_MESSAGE,
  FIRST_INPUT_INDEX,
} from '../../constants';
import useFocusRef from '../../hooks/useFocusRef';
import { sliceText } from '../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardPasswordProps {
  editCardPassword: (password: string) => void;
}

function CardPassword(props: CardPasswordProps) {
  const { editCardPassword } = props;

  const { focusTargetRef } = useFocusRef<HTMLDivElement>(FIRST_INPUT_INDEX);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // password 업데이트
    const newPassword = sliceText(value, CARD_PASSWORD.length);
    setPassword(newPassword);

    // 오류 업데이트
    const isValidatedPassword = CARD_PASSWORD_REGEXP.test(newPassword);
    setPasswordError(!isValidatedPassword);

    // cardInfo 업데이트
    if (!isValidatedPassword) return;
    editCardPassword(newPassword);
  };

  return (
    <CardInputSection
      title={CARD_PASSWORD_MESSAGE.title}
      subTitle={CARD_PASSWORD_MESSAGE.subTitle}
      childrenLabel={CARD_PASSWORD_MESSAGE.label}
    >
      <div ref={focusTargetRef} className={styles.inputWrap}>
        <Input
          name="password"
          type="password"
          error={passwordError}
          label={CARD_PASSWORD_MESSAGE.label}
          placeholder={CARD_PASSWORD_MESSAGE.placeholder}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <ErrorMessage>
        <p>{passwordError ? ERROR_MESSAGE.password : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardPassword;
