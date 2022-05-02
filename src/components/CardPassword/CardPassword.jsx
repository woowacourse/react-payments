import PropTypes from 'prop-types';

import { inputNumberOnly, limitInputLength } from '../../utils';
import { LIMIT_LENGTH } from '../../constants';

function CardPassword({ cardInfo, setCardInfo }) {
  const handleOnChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.CARD_PASSWORD) {
      value = limitInputLength(value, LIMIT_LENGTH.CARD_PASSWORD);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (event.target.value.length >= LIMIT_LENGTH.CARD_PASSWORD) {
      event.target.classList.add('input-correct');
      return;
    }
    event.target.classList.remove('input-correct');
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        name="password1"
        className="input-basic w-15 input-password"
        type="password"
        onChange={handleOnChange}
        value={cardInfo.password1}
        required
      />
      <input
        name="password2"
        className="input-basic w-15 input-password"
        type="password"
        onChange={handleOnChange}
        value={cardInfo.password2}
        required
      />
      <input
        className="input-basic w-15 input-password input-background-hidden"
        type="password"
        value={'⋅'}
        disabled
      />
      <input
        className="input-basic w-15 input-password input-background-hidden"
        type="password"
        value={'⋅'}
        disabled
      />
    </div>
  );
}

export default CardPassword;

CardPassword.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
