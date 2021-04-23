import React, { useState, useEffect, useRef } from "react";
import Card from "../stories/Card";
import { CARD, CARD_SIZE } from "../stories/constants/card";
import Input from "../stories/Input";
import Modal from "../stories/Modal";
import CardTypeRadio from "../stories/CardTypeRadio";

const splitCardNumbers = (value) => {
  const splitNumbers = [];
  let i;

  for (i = 0; i < value.length / 4; i++) {
    splitNumbers.push(value.slice(i * 4, (i + 1) * 4));
  }
  if (value[i * 4] !== undefined) {
    splitNumbers.push(value.slice(i * 4, (i + 1) * 4));
  }

  return splitNumbers;
};

const formatCardNumbers = (numbers) => {
  const hiddenNumbers = numbers
    .slice(2)
    .map((value) => "•".repeat(value.length));

  return [...numbers.slice(0, 2), ...hiddenNumbers].join(" - ");
};

const unformatCardNumbers = (formattedValue) => {
  return formattedValue.replace(/[\s-]/g, "");
};

const isNonNumberValue = (value) => {
  return /[^0-9]/g.test(value);
};

// expiration Date

const formatExpirationDate = (expirationDate) => {
  return Object.values(expirationDate)
    .filter((value) => value !== "")
    .join("/");
};

const unformatExpirationDate = (formattedValue) => {
  return formattedValue.replace("/", "");
};

const CardAddition = (props) => {
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [selectionStart, setSelectionStart] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumbers, setCardNumbers] = useState([]);
  const [expirationDate, setExpirationDate] = useState({
    month: "",
    year: "",
  });
  const [username, setUsername] = useState("");
  const [secureCode, setSecureCode] = useState("");
  const [isInputFulfilled, setIsInputFulfilled] = useState({
    cardNumbers: false,
    expirationDate: false,
    username: false,
    secureCode: false,
    password: false,
  });

  const cardNumbersInputRef = useRef();

  useEffect(() => {
    cardNumbersInputRef?.current?.setSelectionRange(
      selectionStart,
      selectionStart
    );
  }, [cardNumbers, selectionStart]);

  const onCardNumbersChange = (event) => {
    const { value, selectionStart } = event.target;
    const joinedCardNumbers = cardNumbers.join(" - ");
    const diff = value.length - joinedCardNumbers.length;
    let updatedCardNumbers = joinedCardNumbers;

    const mod = selectionStart % 7;
    if (mod === 0 || mod === 6 || mod === 5) {
      setSelectionStart(selectionStart + ((8 - mod) % 7));
    } else {
      setSelectionStart(selectionStart);
    }

    switch (true) {
      case diff > 0:
        if (isNonNumberValue(value[selectionStart - 1])) {
          return;
        }

        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart - 1) +
          value[selectionStart - 1] +
          joinedCardNumbers.slice(selectionStart - 1);
        break;
      case diff === 0:
        if (isNonNumberValue(value[selectionStart - 1])) {
          return;
        }

        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart - 1) +
          value[selectionStart - 1] +
          joinedCardNumbers.slice(selectionStart);
        break;
      case diff < 0:
        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart) +
          joinedCardNumbers.slice(selectionStart + 1);
        break;
      default:
    }

    const unformattedValue = unformatCardNumbers(updatedCardNumbers);
    const splitNumbers = splitCardNumbers(unformattedValue);
    const isCardNumbersFulfilled = splitNumbers[3]?.length === 4;

    setIsModalOpen(isCardNumbersFulfilled);
    setIsInputFulfilled((prev) => ({
      ...prev,
      cardNumbers: isCardNumbersFulfilled,
    }));

    setCardNumbers(splitNumbers);
  };

  const onModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setIsModalOpen(false);
      return;
    }
  };

  const onRadioChange = ({ target }) => {
    setCardType(JSON.parse(target.value));
    setIsModalOpen(false);
  };

  const onExpirationDateChange = ({ target }) => {
    //숫자가 아니면 제외한다.
    //TODO: month의 validation을 할것인가
    const unformattedValue = unformatExpirationDate(target.value);

    //TODO: nonNumber를 긍정으로 바꾸기
    if (isNonNumberValue(unformattedValue)) {
      return;
    }

    const month = unformattedValue.slice(0, 2);
    const year = unformattedValue.slice(2);

    if (unformattedValue.length >= 4) {
      setIsInputFulfilled((prev) => {
        return { ...prev, expirationDate: true };
      });
    } else {
      setIsInputFulfilled((prev) => {
        return { ...prev, expirationDate: false };
      });
    }

    setExpirationDate({
      month,
      year,
    });
  };

  const onUsernameChange = (event) => {
    const { value } = event.target;

    if (value.length >= 2) {
      setIsInputFulfilled((prev) => ({ ...prev, username: true }));
    } else {
      setIsInputFulfilled((prev) => ({ ...prev, username: false }));
    }

    setUsername(value);
  };

  const onSecureCodeChange = (event) => {
    const { value } = event.target;

    if (isNonNumberValue(value)) {
      return;
    }

    if (value.length === 3) {
      setIsInputFulfilled((prev) => ({ ...prev, secureCode: true }));
    } else {
      setIsInputFulfilled((prev) => ({ ...prev, secureCode: false }));
    }

    setSecureCode(value);
  };

  return (
    <>
      <div className="card-addition">
        <Card
          cardType={cardType}
          size={CARD_SIZE.MEDIUM}
          expirationDate={formatExpirationDate(expirationDate)}
          userName={username}
        />
        <form className="card-addition__form">
          <div className="card-addition__number-input mt-standard">
            <label htmlFor="card-number">카드 번호</label>
            <Input
              id="card-number"
              type="text"
              isCenter={true}
              value={formatCardNumbers(cardNumbers)}
              onChange={onCardNumbersChange}
              ref={cardNumbersInputRef}
              maxLength="25"
            />
          </div>

          <div className="card-addition__expiration-input mt-standard">
            <label htmlFor="expiration-date">만료일</label>
            <Input
              id="expiration-date"
              type="text"
              isCenter={true}
              placeHolder="MM / YY"
              // TODO: format, unformat 함수 추상화하기
              value={formatExpirationDate(expirationDate)}
              onChange={onExpirationDateChange}
              maxLength="5"
            />
          </div>

          <div className="card-addition__username-input mt-standard">
            <label htmlFor="username">카드 소유자 이름(선택)</label>
            <span className="card-addition__username-indicator">
              {username.length}/30
            </span>
            <Input
              id="username"
              type="text"
              isCenter={true}
              placeHolder="카드에 표시된 이름과 동일하게 입력하세요"
              value={username}
              onChange={onUsernameChange}
              maxLength="30"
              minLength="2"
            />
          </div>

          <div className="card-addition__secure-code mt-standard">
            <label htmlFor="secure-code">보안 코드(CVC/CVV)</label>
            <div className="card-addition__secure-code-inner">
              <Input
                id="secure-code"
                type="password"
                isCenter={true}
                value={secureCode}
                onChange={onSecureCodeChange}
                maxLength="3"
              />
              <div className="card-addition__tool-tip-button">
                <span>?</span>
              </div>
            </div>
          </div>

          <div className="card-addition__password mt-standard">
            <label>카드비밀번호</label>
            <div className="card-addition__password-inner">
              <Input
                type="number"
                isCenter={true}
                aria-label="첫번째 비밀번호"
                min="0"
                max="9"
                maxLength="1"
                required="required"
              />
              <Input
                type="number"
                isCenter={true}
                aria-label="두번째 비밀번호"
                min="0"
                max="9"
                maxLength="1"
                required="required"
              />
              <div className="card-addition__dot-wrapper">
                <span className="card-addition__dot"></span>
              </div>
              <div className="card-addition__dot-wrapper">
                <span className="card-addition__dot"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <Modal onClick={onModalClick}>
          <form className="card-type-radio-box">
            {Object.values(CARD)
              .filter((value) => value.name !== "")
              .map((value) => (
                <CardTypeRadio
                  cardType={value}
                  groupName="card-type"
                  isChecked={value.name === cardType.name}
                  onChange={onRadioChange}
                />
              ))}
          </form>
        </Modal>
      )}
    </>
  );
};

export default CardAddition;
