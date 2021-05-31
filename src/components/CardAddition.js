import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CardTypeSelector from "./CardTypeSelector";
import Card from "./shared/Card";
import Input from "./shared/Input";
import Modal from "./shared/Modal";
import SimpleButton from "./shared/SimpleButton";

import useCardNumbers from "../hooks/useCardNumbers";
import useExpirationDate from "../hooks/useExpirationDate";
import useSecureCode from "../hooks/useSecureCode";
import useControlledInputValue from "../hooks/useControlledInputValue";
import usePassword from "../hooks/usePassword";
import { CARD_SIZE, UNKNOWN_CARD_TYPE } from "../constants";
import {
  CARD_NUMBER,
  EXPIRATION_DATE,
  FORMAT_CHAR,
  PASSWORD,
  SECURE_CODE_LENGTH,
  USERNAME,
} from "../constants";

const formatCardNumbers = (numbers) => {
  const [firstValue, secondValue, ...restValues] = numbers;
  const hiddenNumbers = restValues.map((value) =>
    FORMAT_CHAR.HIDDEN_NUMBER.repeat(value.length)
  );

  return [firstValue, secondValue, ...hiddenNumbers]
    .filter((value) => value !== undefined)
    .join(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR);
};

const formatExpirationDate = (expirationDate) => {
  return Object.values(expirationDate)
    .filter((value) => value !== "")
    .join(FORMAT_CHAR.EXPIRATION_DATE_SEPARATOR);
};

const CardAddition = (props) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cardType, setCardType] = useState(UNKNOWN_CARD_TYPE);
  const [
    cardNumbers,
    cardNumbersInputRef,
    onCardNumbersChange,
  ] = useCardNumbers([]);
  const [expirationDate, onExpirationDateChange] = useExpirationDate({
    month: "",
    year: "",
  });
  const [username, onUsernameChange] = useControlledInputValue("");
  const [secureCode, onSecureCodeChange] = useSecureCode("");
  const [
    firstPassword,
    secondPassword,
    passwords,
    onPasswordChange,
  ] = usePassword(["", ""]);
  const [inputVerification, setInputVerification] = useState({
    cardNumbers: false,
    expirationDate: false,
    username: false,
    secureCode: false,
    password: false,
  });

  useEffect(() => {
    setIsVisibleModal(inputVerification.cardNumbers);
  }, [inputVerification.cardNumbers]);

  useEffect(() => {
    setInputVerification({
      cardNumbers:
        cardNumbers.length === CARD_NUMBER.LENGTH &&
        cardNumbers.every(
          (number) => number.length === CARD_NUMBER.PARTIAL_LENGTH
        ),
      expirationDate:
        (expirationDate.month + expirationDate.year).length ===
        EXPIRATION_DATE.LENGTH,
      username: username.length >= USERNAME.MIN_LENGTH,
      secureCode: secureCode.length === SECURE_CODE_LENGTH,
      password: passwords.every((value) => value !== ""),
    });
  }, [cardNumbers, expirationDate, username, secureCode, passwords]);

  const onCardInfoSubmit = (event) => {
    event.preventDefault();

    if (cardType.id === UNKNOWN_CARD_TYPE.id) {
      alert("카드 회사를 선택해주세요.");
      return;
    }

    const card = {
      cardType,
      cardNumbers,
      expirationDate,
      username,
      secureCode,
      password: Number(passwords.join("")),
    };

    props.onCardInfoSubmit(card);
  };

  const onModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setIsVisibleModal(false);
      return;
    }
  };

  const onRadioChange = ({ target }) => {
    setCardType(JSON.parse(target.value));
    setIsVisibleModal(false);
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
            <label htmlFor="card-number">카드 번호</label>
            <Input
              id="card-number"
              type="text"
              isCenter={true}
              value={formatCardNumbers(cardNumbers)}
              onChange={onCardNumbersChange}
              ref={cardNumbersInputRef}
              maxLength={CARD_NUMBER.FORMATTED_LENGTH}
              required
            />
          </div>
          <div className="card-addition__expiration-input mt-standard">
            <label htmlFor="expiration-date">만료일</label>
            <Input
              id="expiration-date"
              type="text"
              isCenter={true}
              placeHolder="MM / YY"
              value={formatExpirationDate(expirationDate)}
              onChange={onExpirationDateChange}
              maxLength={EXPIRATION_DATE.FORMATTED_LENGTH}
              required
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
              placeHolder="카드에 표시된 이름과 동일하게 입력하세요"
              value={username}
              onChange={onUsernameChange}
              maxLength={USERNAME.MAX_LENGTH}
              minLength={USERNAME.MIN_LENGTH}
              required
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
                maxLength={SECURE_CODE_LENGTH}
                required
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
                type="password"
                isCenter={true}
                aria-label="첫번째 비밀번호"
                min={PASSWORD.MIN_VALUE_PER_UNIT}
                max={PASSWORD.MAX_VALUE_PER_UNIT}
                maxLength={PASSWORD.MAX_LENGTH_PER_UNIT}
                data-password-index="0"
                value={firstPassword}
                onChange={onPasswordChange}
                required
              />
              <Input
                type="password"
                isCenter={true}
                aria-label="두번째 비밀번호"
                min={PASSWORD.MIN_VALUE_PER_UNIT}
                max={PASSWORD.MAX_VALUE_PER_UNIT}
                maxLength={PASSWORD.MAX_LENGTH_PER_UNIT}
                data-password-index="1"
                value={secondPassword}
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
          {Object.values(inputVerification).every(
            (isFulfilled) => isFulfilled
          ) && (
            <div className="card-addition__form-submit">
              <SimpleButton innerText="다음" />
            </div>
          )}
        </form>
      </div>
      {isVisibleModal && (
        <Modal onClick={onModalClick}>
          <CardTypeSelector
            cardTypeName={cardType.name}
            onRadioChange={onRadioChange}
          />
        </Modal>
      )}
    </>
  );
};

CardAddition.propTypes = {
  onCardInfoSubmit: PropTypes.func.isRequired,
};

export default CardAddition;
