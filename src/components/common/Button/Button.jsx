import { useContext } from 'react';
import { CardInfoContext } from 'App';
import { PAGES } from 'constants';

function Button({ text }) {
  const { state, page } = useContext(CardInfoContext);

  const { inputValid } = state;

  return (
    <div className="button-box">
      <button
        type="submit"
        className={`button-style ${inputValid && page === PAGES.NAME ? 'button-style-mt' : ''}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
