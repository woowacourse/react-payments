import PropTypes from 'prop-types';

import { inputNumberOnly, limitInputLength } from 'utils';
import { LIMIT_LENGTH } from 'constants';

function CVC({ cvc, setCVC }) {
  const handleChange = (event) => {
    const { value } = event.target;

    const cvcInputNumberOnly = inputNumberOnly(value);

    const cvcInputLengthSliced =
      cvcInputNumberOnly.length > LIMIT_LENGTH.CVC
        ? limitInputLength(cvcInputNumberOnly, LIMIT_LENGTH.CVC)
        : cvcInputNumberOnly;

    setCVC(cvcInputLengthSliced);
  };

  return (
    <div className="input-container input-inline">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className={`input-basic w-25 ${cvc.length >= LIMIT_LENGTH.CVC ? 'input-correct' : null} `}
        type="password"
        onChange={handleChange}
        value={cvc}
        required
      />
    </div>
  );
}

export default CVC;

CVC.propTypes = {
  cvc: PropTypes.string.isRequired,
  setCVC: PropTypes.func.isRequired,
};
