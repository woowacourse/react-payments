import { useEffect, useState } from "react";
import {
  CARD_NUMBER,
  EXPIRATION_DATE,
  FORMAT_CHAR,
  PASSWORD_INPUT_LENGTH,
  SECURE_CODE_LENGTH,
  USERNAME,
  VIRTUAL_KEYBOARD_DELETION_INPUT,
  VIRTUAL_KEYBOARD_TARGET_INPUT,
} from "../../constants";
import {
  useCardNumbers,
  useControlledInputValue,
  useExpirationDate,
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

const CardAdditionForm = ({
  onNewCardSubmit,
  virtualKeyboardModal,
  cardTypeSelectionModal,
}) => {
  const [
    cardNumbers,
    cardNumbersInputRef,
    onCardNumbersChange,
    isCardNumbersFullfilled,
  ] = useCardNumbers([]);
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [expirationDate, onExpirationDateChange] = useExpirationDate("");
  const [username, onUsernameChange] = useControlledInputValue("");
  //TODO: secureCodeKeyboard로 이름바꾸기
  const secureCode = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: SECURE_CODE_LENGTH,
    onInputFullfilled: () => {
      virtualKeyboardModal.closeModal();
    },
  });

  const firstPassword = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: PASSWORD_INPUT_LENGTH,
    onInputFullfilled: () => {
      virtualKeyboardModal.closeModal();
    },
  });

  const secondPassword = useVirtualKeyboardInput({
    initialValue: "",
    maxLength: PASSWORD_INPUT_LENGTH,
    onInputFullfilled: () => {
      virtualKeyboardModal.closeModal();
    },
  });

  const onCardInfoSubmit = (event) => {
    event.preventDefault();

    if (cardType.name === CARD.UNKNOWN.name) {
      alert("카드 회사를 선택해주세요.");
      return;
    }

    const card = {
      cardId: getNewId(),
      cardType,
      cardNumbers,
      expirationDate,
      username,
      secureCode: secureCode.currentInput,
      firstPassword: firstPassword.currentInput,
      secondPassword: secondPassword.currentInput,
    };

    onNewCardSubmit(card);
  };

  const isAllInputFulfilled = () => {
    const cardNumbersCondition = isCardNumbersFullfilled;
    const expirationDateCondition =
      expirationDate.length ===
      EXPIRATION_DATE.LENGTH + FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR.length;
    const usernameCondition = username.length >= USERNAME.MIN_LENGTH;
    const secureCodeCondition =
      secureCode.currentInput.length === SECURE_CODE_LENGTH;
    const passwordCondition = firstPassword && secondPassword;

    return (
      cardNumbersCondition &&
      expirationDateCondition &&
      usernameCondition &&
      secureCodeCondition &&
      passwordCondition
    );
  };

  useEffect(() => {
    if (!isCardNumbersFullfilled) {
      return;
    }

    cardTypeSelectionModal.openModal();
  }, [isCardNumbersFullfilled]);

  useEffect(() => {
    const {
      dataPassage: {
        data: { cardType },
      },
    } = cardTypeSelectionModal;

    if (!cardType) {
      return;
    }

    setCardType(cardType);
  }, [cardTypeSelectionModal.dataPassage.data.cardType]);

  useEffect(() => {
    const {
      dataPassage: {
        data: { targetInput, virtualKeyboardInput },
      },
    } = virtualKeyboardModal;

    const virtualKeyboardMap = {
      secureCode,
      firstPassword,
      secondPassword,
    };

    if (virtualKeyboardInput === VIRTUAL_KEYBOARD_DELETION_INPUT) {
      virtualKeyboardMap[targetInput]?.deleteInputChar();
      return;
    }

    virtualKeyboardMap[targetInput]?.insertInputChar(virtualKeyboardInput);
  }, [virtualKeyboardModal.dataPassage.data.virtualKeyboardInput]);

  //TODO: onClick 내부 바깥으로 빼기
  return (
    <form onSubmit={onCardInfoSubmit} className="card-addition__form">
      <div className="card-addition">
        <Card
          cardType={cardType}
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
                virtualKeyboardModal.dataPassage.passData(
                  "targetInput",
                  VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE
                );
                virtualKeyboardModal.openModal();
              }}
            >
              <VirtualKeyboardInput
                type="password"
                isCenter={true}
                value={secureCode.currentInput}
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
            onClick={() => {
              virtualKeyboardModal.dataPassage.passData(
                "targetInput",
                VIRTUAL_KEYBOARD_TARGET_INPUT.FIRST_PASSWORD
              );
              virtualKeyboardModal.openModal();
            }}
          >
            <VirtualKeyboardInput
              type="password"
              isCenter={true}
              aria-label="첫번째 비밀번호"
              value={firstPassword.currentInput}
              required
            />
          </div>
          <div
            className="card-addition__password-inner__password"
            onClick={() => {
              virtualKeyboardModal.dataPassage.passData(
                "targetInput",
                VIRTUAL_KEYBOARD_TARGET_INPUT.SECOND_PASSWORD
              );
              virtualKeyboardModal.openModal();
            }}
          >
            <VirtualKeyboardInput
              type="password"
              isCenter={true}
              aria-label="두번째 비밀번호"
              value={secondPassword.currentInput}
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
  virtualKeyboardModal: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    dataPassage: PropTypes.shape({
      data: PropTypes.any.isRequired,
      passData: PropTypes.func.isRequired,
    }).isRequired,
  }),
  cardTypeSelectionModal: PropTypes.shape({
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    dataPassage: PropTypes.shape({
      data: PropTypes.any.isRequired,
      passData: PropTypes.func.isRequired,
    }).isRequired,
  }),
  onNewCardAdd: PropTypes.func.isRequired,
};

export default CardAdditionForm;
