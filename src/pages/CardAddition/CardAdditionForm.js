import { useEffect } from "react";
import {
  CARD_NUMBER,
  EXPIRATION_DATE,
  FORMAT_CHAR,
  SECURE_CODE_LENGTH,
  USERNAME,
} from "../../constants";
import {
  useCardNumbers,
  useControlledInputValue,
  useExpirationDate,
  usePassword,
  useVirtualKeyboardInput,
} from "../../hooks";
import { getNewId } from "../../utils";
import { Button, Card, Input, VirtualKeyboardInput } from "../../components";
import { CARD, CARD_SIZE } from "../../constants";
import PropTypes from "prop-types";

const formatCardNumbers = (numbers) => {
  const [...firstTwoNumbers] = numbers.slice(0, 2);
  const [...secondTwoNumbers] = numbers.slice(2);

  const hiddenNumbers = secondTwoNumbers.map((value) =>
    FORMAT_CHAR.HIDDEN_NUMBER.repeat(value.length)
  );

  return [...firstTwoNumbers, ...hiddenNumbers]
    .map((number) => (number ? number : ""))
    .join(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR);
};

const CardAdditionForm = (props) => {
  const [
    cardNumbers,
    cardNumbersInputRef,
    onCardNumbersChange,
    verifyCardNumberInputsFullFilled,
  ] = useCardNumbers([]);
  const [expirationDate, onExpirationDateChange] = useExpirationDate("");
  const [username, onUsernameChange] = useControlledInputValue("");
  const [password, onPasswordChange] = usePassword(["", ""]);

  const onCardInfoSubmit = (event) => {
    event.preventDefault();

    if (props.cardType.name === CARD.UNKNOWN.name) {
      alert("카드 회사를 선택해주세요.");
      return;
    }

    const card = {
      cardId: getNewId(),
      cardType: props.cardType,
      cardNumbers,
      expirationDate,
      username,
      secureCode: props.secureCode,
      password,
    };

    props.onNewCardAdd(card);
  };

  const isAllInputFulfilled = () => {
    const cardNumbersCondition = verifyCardNumberInputsFullFilled();
    const expirationDateCondition =
      expirationDate.length ===
      EXPIRATION_DATE.LENGTH + FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR.length;
    const usernameCondition = username.length >= USERNAME.MIN_LENGTH;
    const secureCodeCondition = props.secureCode.length === SECURE_CODE_LENGTH;
    const passwordCondition = password.every((value) => value !== "");

    return (
      cardNumbersCondition &&
      expirationDateCondition &&
      usernameCondition &&
      secureCodeCondition &&
      passwordCondition
    );
  };

  useEffect(() => {
    props.setCardTypeModalVisibility(verifyCardNumberInputsFullFilled());
  }, [cardNumbers]);

  return (
    <form onSubmit={onCardInfoSubmit} className="card-addition__form">
      <div className="card-addition">
        <Card
          cardType={props.cardType}
          size={CARD_SIZE.MEDIUM}
          expirationDate={expirationDate}
          username={username}
          cardNumbers={cardNumbers}
        />
      </div>

      <div className="card-addition__number-input mt-standard">
        <label>
          <span>카드 번호</span>
          <Input
            type="text"
            isCenter={true}
            value={formatCardNumbers(cardNumbers)}
            onChange={onCardNumbersChange}
            ref={cardNumbersInputRef}
            maxLength={CARD_NUMBER.FORMATTED_LENGTH}
            required
          />
        </label>
      </div>
      <div className="card-addition__expiration-input mt-standard">
        <label>
          <span>만료일</span>
          <Input
            type="text"
            isCenter={true}
            placeHolder="MM / YY"
            value={expirationDate}
            onChange={onExpirationDateChange}
            maxLength={EXPIRATION_DATE.FORMATTED_LENGTH}
            required
          />
        </label>
      </div>
      <div className="card-addition__username-input mt-standard">
        <label>
          <span>카드 소유자 이름(선택)</span>
          <span className="card-addition__username-indicator">
            {username.length}/30
          </span>
          <Input
            type="text"
            placeHolder="카드에 표시된 이름과 동일하게 입력하세요"
            value={username}
            onChange={onUsernameChange}
            maxLength={USERNAME.MAX_LENGTH}
            minLength={USERNAME.MIN_LENGTH}
            required
          />
        </label>
      </div>
      <div className="card-addition__secure-code mt-standard">
        <label>
          <span>보안 코드(CVC/CVV)</span>
          <div className="card-addition__secure-code-inner">
            <div
              onClick={() => {
                props.setVirtualKeyboardModalVisibility(true);
              }}
            >
              <VirtualKeyboardInput
                type="password"
                isCenter={true}
                valueByState={props.secureCode}
              />
            </div>
            <div className="card-addition__tool-tip-button">
              <span>?</span>
            </div>
          </div>
        </label>
      </div>
      <div className="card-addition__password mt-standard">
        <label>
          <span>카드비밀번호</span>
        </label>
        <div className="card-addition__password-inner">
          <Input
            type="password"
            isCenter={true}
            aria-label="첫번째 비밀번호"
            min="0"
            max="9"
            maxLength="1"
            data-password-index="0"
            value={password[0]}
            onChange={onPasswordChange}
            required
          />
          <Input
            type="password"
            isCenter={true}
            aria-label="두번째 비밀번호"
            min="0"
            max="9"
            maxLength="1"
            data-password-index="1"
            value={password[1]}
            onChange={onPasswordChange}
            required
          />
          <div className="card-addition__dot-wrapper">
            <span className="card-addition__dot"></span>
          </div>
          <div className="card-addition__dot-wrapper">
            <span className="card-addition__dot"></span>
          </div>
        </div>
      </div>
      {isAllInputFulfilled() && (
        <div className="card-addition__form-submit">
          <Button innerText="다음" />
        </div>
      )}
    </form>
  );
};

CardAdditionForm.propTypes = {
  cardType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  setCardTypeModalVisibility: PropTypes.func.isRequired,
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAdditionForm;
