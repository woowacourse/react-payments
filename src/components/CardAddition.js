import React, { useState, useEffect, useRef } from "react";

import Card from "../stories/Card";
import { CARD, CARD_SIZE } from "../stories/constants/card";
import Input from "../stories/Input";
import Modal from "../stories/Modal";
import CardTypeRadio from "../stories/CardTypeRadio";
import Button from "../stories/Button";

import useCardNumbers from "../hooks/useCardNumbers";
import useExpirationDate from "../hooks/useExpirationDate";
import useSecureCode from "../hooks/useSecureCode";
import useControlledInputValue from "../hooks/useControlledInputValue";
import usePassword from "../hooks/usePassword";

const formatCardNumbers = (numbers) => {
  const hiddenNumbers = numbers
    .slice(2)
    .map((value) => "•".repeat(value.length));

  return [...numbers.slice(0, 2), ...hiddenNumbers].join(" - ");
};

// expiration Date

const formatExpirationDate = (expirationDate) => {
  return Object.values(expirationDate)
    .filter((value) => value !== "")
    .join("/");
};

const CardAddition = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardType, setCardType] = useState(CARD.UNKNOWN);
  const [cardNumbers, selectionStart, onCardNumbersChange] = useCardNumbers([]);
  const [expirationDate, onExpirationDateChange] = useExpirationDate({
    month: "",
    year: "",
  });
  const [username, onUsernameChange] = useControlledInputValue("");
  const [secureCode, onSecureCodeChange] = useSecureCode("");
  const [password, onPasswordChange] = usePassword(["", ""]);
  const [inputVerification, setinputVerification] = useState({
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

  useEffect(() => {
    const isCardNumbersFulfilled = cardNumbers[3]?.length === 4;

    setIsModalOpen(isCardNumbersFulfilled);
  }, [cardNumbers]);

  useEffect(() => {
    setinputVerification({
      cardNumbers: cardNumbers[3]?.length === 4,
      expirationDate: (expirationDate.month + expirationDate.year).length === 4,
      username: username.length >= 2,
      secureCode: secureCode.length === 3,
      password: password.every((value) => value !== ""),
    });
  }, [cardNumbers, expirationDate, username, secureCode, password]);

  const onNextButtonClick = (event) => {
    event.preventDefault();

    if (cardType.name === CARD.UNKNOWN.name) {
      alert("카드 회사를 선택해주세요.");
      return;
    }

    const card = {
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
          userName={username}
          numbers={cardNumbers}
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
                type="password"
                isCenter={true}
                aria-label="첫번째 비밀번호"
                min="0"
                max="9"
                maxLength="1"
                data-password-index="0"
                value={password[0]}
                onChange={onPasswordChange}
                required="required"
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
          {Object.values(inputVerification).every(
            (isFulfilled) => isFulfilled
          ) && (
            <div className="card-addition__form-submit">
              <Button onClick={onNextButtonClick} innerText="다음" />
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
