import { useContext } from 'react';
import { CardInfoContext } from 'App';

function Button({ text }) {
  const { state } = useContext(CardInfoContext);

  const { inputValid } = state;

  return (
    <div className="button-box">
      <button type="submit" className={`button-style ${inputValid ? 'button-style-mt' : ''}`}>
        {text}
      </button>
    </div>
  );
}

export default Button;
