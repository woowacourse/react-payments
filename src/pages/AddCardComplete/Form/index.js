import { TextButton } from '../../../components';
import { CARD } from '../../../constants';

export default function Form({ onCardNickNameSubmit, cardNickName, setCardNickName }) {
  return (
    <form onSubmit={onCardNickNameSubmit}>
      <input
        id="card-nickname"
        className="add-card-complete__input"
        value={cardNickName}
        onChange={(event) => {
          setCardNickName(event.target.value);
        }}
        maxLength={CARD.NICKNAME_MAX_LENGTH}
      />
      <div className="bottom-right-button">
        <TextButton>확인</TextButton>
      </div>
    </form>
  );
}
