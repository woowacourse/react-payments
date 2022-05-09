import PropTypes from 'prop-types';
import Input from '../../input/Input';
import { validNumber, validMaxLength, validRange } from '../../../validation/index';
import { CARD } from '../../../constant';

function CardForm({ card, updateCard, handleCardFormSubmit }) {
  const onSubmitCardForm = (event) => {
    event.preventDefault();
    handleCardFormSubmit();
  };

  const moveFocus = (form, currentElement, direction) => {
    const formInputArray = [...form];
    const currentIndex = formInputArray.indexOf(currentElement);
    formInputArray[currentIndex + direction]?.focus();
  };

  const handlePrevFocus = (e) => {
    const { key, target } = e;
    const { form, value } = target;

    if (key !== 'Backspace' || value !== '') return;
    moveFocus(form, target, -1);
  };

  const handleNextFocus = (e) => {
    const { form, maxLength, value } = e.target;

    if (value.length === maxLength) {
      moveFocus(form, e.target, 1);
    }
  };

  return (
    <form onSubmit={onSubmitCardForm} onChange={handleNextFocus} onKeyDown={handlePrevFocus}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          <Input
            length={CARD.NUMBER_LENGTH}
            value={card.firstCardNumber}
            name="firstCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            length={CARD.NUMBER_LENGTH}
            value={card.secondCardNumber}
            name="secondCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            type="password"
            length={CARD.NUMBER_LENGTH}
            value={card.thirdCardNumber}
            name="thirdCardNumber"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber }}
          />
          <Input
            type="password"
            length={CARD.NUMBER_LENGTH}
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
            length={CARD.DATE.LENGTH}
            min={CARD.DATE.RANGE.MIN}
            max={CARD.DATE.RANGE.MAX}
            value={card.expireMonth}
            name="expireMonth"
            updateCard={updateCard}
            validators={{ validMaxLength, validNumber, validRange }}
          />
          /
          <Input
            placeholder="YY"
            length={CARD.DATE.LENGTH}
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
            {card.ownerName.length}/{CARD.NAME_LENGTH}
          </span>
        </div>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          length={CARD.NAME_LENGTH}
          value={card.ownerName}
          name="ownerName"
          updateCard={updateCard}
          validators={{ validMaxLength }}
          optional
        />
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <Input
          size="w-25"
          type="password"
          length={CARD.SECURITY_CODE_LENGTH}
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
          length={CARD.PASSWORD_LENGTH}
          value={card.firstPassword}
          name="firstPassword"
          updateCard={updateCard}
          validators={{ validMaxLength, validNumber }}
        />
        <Input
          size="w-15 mr-10"
          type="password"
          length={CARD.PASSWORD_LENGTH}
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

CardForm.propTypes = {
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
  updateCard: PropTypes.func.isRequired,
  handleCardFormSubmit: PropTypes.func.isRequired,
};

export default CardForm;
