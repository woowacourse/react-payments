import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormComplete } from '../../../../hooks/useFormComplete.ts';
import Position from '../../../commons/Position';
import PropTypes from 'prop-types';
import UnderlineInput from '../../Input/UnderlineInput';
import { CARD_DEFINITION } from '../../../types';
import { ROUTE } from '../../../../route';

function AliasInputForm({ card, cardListDispatch }) {
  const navigate = useNavigate();
  const [alias, setAlias] = useState(card.alias ?? '');

  const isComplete = useFormComplete(alias, (alias) => alias.length > 0);

  const onSubmitInputForm = (e) => {
    e.preventDefault();

    cardListDispatch({ type: 'CHANGE_ALIAS', payload: { alias, id: card.id } });
    navigate(ROUTE.home.route, { replace: true });
  };

  const onChangeInput = (e) => {
    const {
      target: { value },
    } = e;
    if (value.length <= 30) {
      setAlias(value);
    }
  };

  return (
    <form className="card-input-form scroll-form" onSubmit={onSubmitInputForm} autoComplete="off">
      <div className="input-container flex-center w-100">
        <UnderlineInput value={alias} onChange={onChangeInput} />
      </div>
      <Position position="absolute" right="20px">
        <button className="button-box" disabled={isComplete === false}>
          <span className="button-text">다음</span>
        </button>
      </Position>
    </form>
  );
}

AliasInputForm.propTypes = {
  card: CARD_DEFINITION,
  cardListDispatch: PropTypes.func,
};

export default AliasInputForm;
