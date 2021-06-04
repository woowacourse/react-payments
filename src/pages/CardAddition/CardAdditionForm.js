import {
  ALERT_MESSAGE,
  CARD_NUMBER,
  EXPIRATION_DATE,
  FORMAT_CHAR,
  PASSWORD_INPUT_LENGTH,
  SECURE_CODE_LENGTH,
  USERNAME,
  VIRTUAL_KEYBOARD_TARGET_INPUT,
} from "../../constants";
import {
  useCardNumbersInput,
  useControlledInput,
  useExpirationDateInput,
  useModalCardTypeInput,
  useModalVirtualKeyboardInput,
} from "../../hooks";
import { getNewId } from "../../utils";
import { Button, Card, Input, VirtualKeyboardInput } from "../../components";
import { CARD, CARD_SIZE, MODAL_DATA_KEY } from "../../constants";
import PropTypes from "prop-types";

const CardAdditionForm = ({
  onNewCardSubmit,
  cardTypeSelectionModalInterface,
  virtualKeyboardModalInterface,
}) => {
  const cardNumbersInput = useCardNumbersInput({
    onCardNumbersFullfilled: cardTypeSelectionModalInterface.openModal,
  });
  const cardTypeInput = useModalCardTypeInput({
    modalInterface: cardTypeSelectionModalInterface,
  });
  const expirationDateInput = useExpirationDateInput("");
  const usernameInput = useControlledInput("");
  const secureCodeInput = useModalVirtualKeyboardInput({
    targetInputType: VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE,
    maxLength: SECURE_CODE_LENGTH,
    modalInterface: virtualKeyboardModalInterface,
  });
  const firstPasswordInput = useModalVirtualKeyboardInput({
    targetInputType: VIRTUAL_KEYBOARD_TARGET_INPUT.FIRST_PASSWORD,
    maxLength: PASSWORD_INPUT_LENGTH,
    modalInterface: virtualKeyboardModalInterface,
  });
  const secondPasswordInput = useModalVirtualKeyboardInput({
    targetInputType: VIRTUAL_KEYBOARD_TARGET_INPUT.SECOND_PASSWORD,
    maxLength: PASSWORD_INPUT_LENGTH,
    modalInterface: virtualKeyboardModalInterface,
  });

  const openVirtualKeyboard = (targetInput) => () => {
    virtualKeyboardModalInterface.dataPassage.passData(
      MODAL_DATA_KEY.TARGET_INPUT,
      targetInput
    );
    virtualKeyboardModalInterface.openModal();
  };

  const isAllInputFulfilled = () => {
    const cardNumbersCondition = cardNumbersInput.isFullfilled;
    const expirationDateCondition =
      expirationDateInput.value.length ===
      EXPIRATION_DATE.LENGTH + FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR.length;
    const usernameCondition = usernameInput.value.length >= USERNAME.MIN_LENGTH;
    const secureCodeCondition =
      secureCodeInput.value.length === SECURE_CODE_LENGTH;
    const passwordCondition =
      firstPasswordInput.value && secondPasswordInput.value;

    return (
      cardNumbersCondition &&
      expirationDateCondition &&
      usernameCondition &&
      secureCodeCondition &&
      passwordCondition
    );
  };

  const onCardInfoSubmit = (event) => {
    event.preventDefault();

    if (cardTypeInput.value.name === CARD.UNKNOWN.name) {
      alert(ALERT_MESSAGE.PLEASE_SELECT_CARD_CORP);
      return;
    }

    const card = {
      cardId: getNewId(),
      cardType: cardTypeInput.value,
      cardNumbers: cardNumbersInput.value,
      expirationDate: expirationDateInput.value,
      username: usernameInput.value,
      secureCode: secureCodeInput.value,
      firstPassword: firstPasswordInput.value,
      secondPassword: secondPasswordInput.value,
    };

    onNewCardSubmit(card);
  };

  //TODO: onClick 내부 바깥으로 빼기
  return (
    <form onSubmit={onCardInfoSubmit} className="card-addition__form">
      <div className="card-addition">
        <Card
          cardType={cardTypeInput.value}
          size={CARD_SIZE.MEDIUM}
          expirationDate={expirationDateInput.value}
          username={usernameInput.value}
          cardNumbers={cardNumbersInput.value}
        />
      </div>

      <div className="card-addition__number-input mt-standard">
        <label>
          <span>카드 번호</span>
          <Input
            type="text"
            isCenter={true}
            value={cardNumbersInput.formattedValue}
            onChange={cardNumbersInput.onChange}
            ref={cardNumbersInput.ref}
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
            value={expirationDateInput.value}
            onChange={expirationDateInput.onChange}
            maxLength={EXPIRATION_DATE.FORMATTED_LENGTH}
            required
          />
        </label>
      </div>
      <div className="card-addition__username-input mt-standard">
        <label>
          <span>카드 소유자 이름(선택)</span>
          <span className="card-addition__username-indicator">
            {usernameInput.value.length}/30
          </span>
          <Input
            type="text"
            placeHolder="카드에 표시된 이름과 동일하게 입력하세요"
            value={usernameInput.value}
            onChange={usernameInput.onChange}
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
              onClick={openVirtualKeyboard(
                VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE
              )}
            >
              <VirtualKeyboardInput
                type="password"
                isCenter={true}
                value={secureCodeInput.value}
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
          <div
            className="card-addition__password-inner__password"
            onClick={openVirtualKeyboard(
              VIRTUAL_KEYBOARD_TARGET_INPUT.FIRST_PASSWORD
            )}
          >
            <VirtualKeyboardInput
              type="password"
              isCenter={true}
              aria-label="첫번째 비밀번호"
              value={firstPasswordInput.value}
              required
            />
          </div>
          <div
            className="card-addition__password-inner__password"
            onClick={openVirtualKeyboard(
              VIRTUAL_KEYBOARD_TARGET_INPUT.SECOND_PASSWORD
            )}
          >
            <VirtualKeyboardInput
              type="password"
              isCenter={true}
              aria-label="두번째 비밀번호"
              value={secondPasswordInput.value}
              required
            />
          </div>
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
  onNewCardSubmit: PropTypes.func.isRequired,
  virtualKeyboardModalInterface: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    dataPassage: PropTypes.shape({
      data: PropTypes.any.isRequired,
      passData: PropTypes.func.isRequired,
    }).isRequired,
  }),
  cardTypeSelectionModalInterface: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    dataPassage: PropTypes.shape({
      data: PropTypes.any.isRequired,
      passData: PropTypes.func.isRequired,
    }).isRequired,
  }),
};

export default CardAdditionForm;
