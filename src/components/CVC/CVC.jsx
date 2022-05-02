import PropTypes from 'prop-types';

import { inputNumberOnly, limitInputLength } from '../../utils';
import { LIMIT_LENGTH } from '../../constants';

function CVC({ cardInfo, setCardInfo }) {
  const handleOnChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.CVC) {
      value = limitInputLength(value, LIMIT_LENGTH.CVC);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });

    if (event.target.value.length >= LIMIT_LENGTH.CVC) {
      event.target.classList.add('input-correct');
      return;
    }
    event.target.classList.remove('input-correct');
  };

  return (
    <div className="input-container input-inline">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className="input-basic w-25"
        type="password"
        onChange={handleOnChange}
        value={cardInfo.cvc}
        required
      />
    </div>
  );
}

export default CVC;

CVC.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
