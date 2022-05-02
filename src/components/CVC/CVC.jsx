import PropTypes from 'prop-types';

import { inputNumberOnly, limitInputLength } from 'utils';
import { LIMIT_LENGTH } from 'constants';

function CVC({ cardInfo, setCardInfo }) {
  const handleChange = (event) => {
    const { value, name } = event.target;

    const cvcInputNumberOnly = inputNumberOnly(value);

    const cvcInputLengthSliced =
      cvcInputNumberOnly.length > LIMIT_LENGTH.CVC
        ? limitInputLength(cvcInputNumberOnly, LIMIT_LENGTH.CVC)
        : cvcInputNumberOnly;

    setCardInfo({
      ...cardInfo,
      [name]: cvcInputLengthSliced,
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
