import PropTypes from 'prop-types';
import Input from '../input/Input';
import { validNumber, validMaxLength, validRange } from '../../validator';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../../constants';

function AddCard({ card, updateCard, addCard }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addCard();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            value={card.firstCardNumber}
            name="firstCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            length={MAX_LENGTH.CARD_NUMBER}
            value={card.secondCardNumber}
            name="secondCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
            value={card.thirdCardNumber}
            name="thirdCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            type="password"
            length={MAX_LENGTH.CARD_NUMBER}
            value={card.fourthCardNumber}
            name="fourthCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <Input
            placeholder="MM"
            length={MAX_LENGTH.DATE}
            minLength={MIN_LENGTH.MONTH}
            min={RANGE.MONTH_MIN}
            max={RANGE.MONTH_MAX}
            value={card.expireMonth}
            name="expireMonth"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber, validRange }}
          />
          /
          <Input
            placeholder="YY"
            length={MAX_LENGTH.DATE}
            value={card.expireYear}
            name="expireYear"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="owner-name-wrapper">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <span className="input-title">
            {card.ownerName.length}/{MAX_LENGTH.NAME}
          </span>
        </div>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          length={MAX_LENGTH.NAME}
          minLength={MIN_LENGTH.NAME}
          value={card.ownerName}
          name="ownerName"
          updateCard={updateCard}
          validators={{ validMaxLength }}
          optional={false}
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <Input
          size="w-25"
          type="password"
          length={MAX_LENGTH.SECURITY_CODE}
          value={card.securityCode}
          name="securityCode"
          updateCard={updateCard}
          validators={{ validMaxLength, validNumber }}
        />
        <div className="help-tip">
          <p>카드 뒷면 끝 세 자리를 입력해주세요.</p>
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        <Input
          size="w-15 mr-10"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          value={card.firstPassword}
          name="firstPassword"
          updateCard={updateCard}
          validators={{ validMaxLength, validNumber }}
        />
        <Input
          size="w-15 mr-10"
          type="password"
          length={MAX_LENGTH.PASSWORD}
          value={card.secondPassword}
          name="secondPassword"
          updateCard={updateCard}
          validators={{ validMaxLength, validNumber }}
        />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="button-box">
        <button type="submit" className="button-text">
          다음
        </button>
      </div>
    </form>
  );
}

AddCard.propTypes = {
  card: PropTypes.shape({
    firstCardNumber: PropTypes.string.isRequired,
    secondCardNumber: PropTypes.string.isRequired,
    thirdCardNumber: PropTypes.string.isRequired,
    fourthCardNumber: PropTypes.string.isRequired,
    expireMonth: PropTypes.string.isRequired,
    expireYear: PropTypes.string.isRequired,
    ownerName: PropTypes.string.isRequired,
    securityCode: PropTypes.string.isRequired,
    firstPassword: PropTypes.string,
    secondPassword: PropTypes.string,
  }).isRequired,
  updateCard: PropTypes.func,
  addCard: PropTypes.func,
};

export default AddCard;
