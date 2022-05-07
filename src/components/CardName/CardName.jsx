import { useContext } from 'react';
import { CardInfoContext } from 'App';

function CardName() {
  const { state, dispatch } = useContext(CardInfoContext);

  const { name } = state;
  const setCardName = (name) => dispatch({ type: 'SET_CARD_NAME', name });

  const handleChange = (event) => {
    const { value } = event.target;

    setCardName(value);
  };

  return (
    <div className="input-container flex-center input-card-name-width">
      <input
        className="input-underline w-65"
        type="text"
        placeholder="카드의 별칭을 입력해주세요."
        required
        onChange={handleChange}
        value={name}
      />
    </div>
  );
}

export default CardName;
