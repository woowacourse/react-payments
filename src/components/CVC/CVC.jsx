import PropTypes from 'prop-types';

import { inputNumberOnly, limitInputLength } from 'utils';
import { LIMIT_LENGTH } from 'constants';

function CVC({ cardInfo, setCardInfo }) {
  const handleChange = (event) => {
    let { value, name } = event.target;
    value = inputNumberOnly(value);

    if (value.length > LIMIT_LENGTH.CVC) {
      value = limitInputLength(value, LIMIT_LENGTH.CVC);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div className="input-container input-inline">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className={`input-basic w-25 ${
          cardInfo.cvc.length >= LIMIT_LENGTH.CVC ? 'input-correct' : null
        } `}
        type="password"
        onChange={handleChange}
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
