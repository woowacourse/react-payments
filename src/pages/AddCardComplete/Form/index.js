import { TextButton } from '../../../components';
import { CARD } from '../../../constants';
import './style.css';

export default function Form({ onSubmitNickName, nickName, setNickName }) {
  return (
    <form className="add-card-complete" onSubmit={onSubmitNickName}>
      <input
        id="card-nickname"
        className="add-card-complete__input"
        value={nickName}
        onChange={(event) => {
          setNickName(event.target.value);
        }}
        maxLength={CARD.NICKNAME_MAX_LENGTH}
      />
      <div className="bottom-right-button">
        <TextButton>확인</TextButton>
      </div>
    </form>
  );
}
