import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { inputNumberOnly, limitInputLength } from 'utils';
import { LIMIT_LENGTH } from 'constants';

function CardPassword() {
  const { state, dispatch } = useContext(CardInfoContext);

  const cardPasswords = [state.inputs.password1, state.inputs.password2];

  const setCardPasswords = (cardPasswords) =>
    dispatch({ type: 'SET_CARD_PASSWORDS', cardPasswords });

  const handleChange = (event) => {
    const { value, name } = event.target;

    const passwordInputNumberOnly = inputNumberOnly(value);

    const passwordInputLengthSliced =
      passwordInputNumberOnly.length > LIMIT_LENGTH.CARD_PASSWORD
        ? limitInputLength(passwordInputNumberOnly, LIMIT_LENGTH.CARD_PASSWORD)
        : passwordInputNumberOnly;

    const newCardPasswords = [...cardPasswords];

    switch (name) {
      case 'password1':
        newCardPasswords[0] = passwordInputLengthSliced;
        break;
      case 'password2':
        newCardPasswords[1] = passwordInputLengthSliced;
        break;
      default:
        break;
    }

    setCardPasswords(newCardPasswords);
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        name="password1"
        className={`input-basic w-15 input-password  ${
          cardPasswords[0]?.length >= LIMIT_LENGTH.CARD_PASSWORD ? 'input-correct' : ''
        }`}
        type="password"
        onChange={handleChange}
        value={cardPasswords[0]}
        required
      />
      <input
        name="password2"
        className={`input-basic w-15 input-password ${
          cardPasswords[1]?.length >= LIMIT_LENGTH.CARD_PASSWORD ? 'input-correct' : ''
        }`}
        type="password"
        onChange={handleChange}
        value={cardPasswords[1]}
        required
      />
      <input
        className={`input-basic w-15 input-password input-background-hidden`}
        type="password"
        value={'⋅'}
        disabled
      />
      <input
        className={`input-basic w-15 input-password input-background-hidden`}
        type="password"
        value={'⋅'}
        disabled
      />
    </div>
  );
}

export default CardPassword;
