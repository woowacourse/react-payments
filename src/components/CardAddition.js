import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CARD, CARD_SIZE } from "./common/constants/card";
import { Card, Input, Modal, CardTypeRadio, Button } from "./common";
import {
  useCardNumbers,
  useExpirationDate,
  useSecureCode,
  useControlledInputValue,
  usePassword,
} from "../hooks";
import {
  CARD_NUMBER,
  EXPIRATION_DATE,
  FORMAT_CHAR,
  SECURE_CODE_LENGTH,
  USERNAME,
} from "../constants";
import { getNewId } from "../utils";

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

const formatExpirationDate = (expirationDate) => {
  return Object.values(expirationDate)
    .filter((value) => value !== "")
    .join(FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR);
};

const CardAddition = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [
    cardNumbers,
    cardNumbersInputRef,
    onCardNumbersChange,
    verifyCardNumberInputsFullFilled,
  ] = useCardNumbers([]);
  const [expirationDate, onExpirationDateChange] = useExpirationDate({
    month: "",
    year: "",
  });
  const [username, onUsernameChange] = useControlledInputValue("");
  const [secureCode, onSecureCodeChange] = useSecureCode("");
  const [password, onPasswordChange] = usePassword(["", ""]);

  useEffect(() => {
    setIsModalOpen(verifyCardNumberInputsFullFilled());
  }, [cardNumbers]);

  const isAllInputFulfilled = () => {
    const cardNumbersCondition = verifyCardNumberInputsFullFilled();
    const expirationDateCondition =
      (expirationDate.month + expirationDate.year).length ===
      EXPIRATION_DATE.LENGTH;
    const usernameCondition = username.length >= USERNAME.MIN_LENGTH;
    const secureCodeCondition = secureCode.length === SECURE_CODE_LENGTH;
    const passwordCondition = password.every((value) => value !== "");

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
      secureCode,
      password,
    };

    props.onCardInfoSubmit(card);
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

  return (
    <>
      <div className="card-addition">
        <Card
          cardType={cardType}
          size={CARD_SIZE.MEDIUM}
          expirationDate={formatExpirationDate(expirationDate)}
          username={username}
          cardNumbers={cardNumbers}
        />
        <form onSubmit={onCardInfoSubmit} className="card-addition__form">
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
                value={formatExpirationDate(expirationDate)}
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
                <Input
                  type="password"
                  isCenter={true}
                  value={secureCode}
                  onChange={onSecureCodeChange}
                  maxLength={SECURE_CODE_LENGTH}
                  required
                />
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
      </div>
      {isModalOpen && (
        <Modal onClick={onModalClick}>
          <form className="card-type-radio-box">
            {Object.values(CARD)
              .filter((value) => value.name !== "")
              .map((value) => (
                <CardTypeRadio
                  key={value.name + value.color}
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

CardAddition.propTypes = {
  onCardInfoSubmit: PropTypes.func.isRequired,
};

export default CardAddition;
