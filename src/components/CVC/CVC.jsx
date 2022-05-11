import { useContext } from 'react';
import { CardInfoContext } from 'contexts/CardInfoContextProvider';

import { LIMIT_LENGTH } from 'constants';
import { inputNumberOnly, limitInputLength } from 'utils';

function CVC() {
  const { state, dispatch } = useContext(CardInfoContext);
  const { cvc } = state.inputs;

  const setCVC = (cvc) => dispatch({ type: 'SET_CVC', cvc });

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
        className={`input-basic w-25 ${cvc?.length >= LIMIT_LENGTH.CVC ? 'input-correct' : ''} `}
        type="password"
        onChange={handleChange}
        value={cvc}
        required
      />
    </div>
  );
}

export default CVC;
