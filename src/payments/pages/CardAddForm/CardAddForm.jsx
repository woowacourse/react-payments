/* eslint-disable no-console */
import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import InputTitle from "../../components/InputTitle/InputTitle";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import BankSelector from "../../components/BankSelector/BankSelector";
import Circle from "../../components/Circle/Circle";
import Modal from "../../components/Modal/Modal";
import QuestionIcon from "../../components/ToolTip/QuestionIcon";
import ToolTip from "../../components/ToolTip/ToolTip";
import InputBox from "../../components/InputBox/InputBox";
import InputLabel from "../../components/InputLabel/InputLabel";
import InputContent from "../../components/InputContent/InputContent";
import InputValidationMessage from "../../components/InputValidationMessage/InputValidationMessage";
import { useInputs, useInput } from "../../hooks/useInputs";
import { cardNumberInfos, expirationDateInfos, passwordInfos } from "./inputInfos";
import {
  validateCardNumbers,
  validateExpirationDate,
  validateOwnerName,
  validateSecurityCode,
  validatePasswords,
} from "./validator";

const initialCardNumberValues = Object.fromEntries(cardNumberInfos.map(({ id }) => [id, ""]));

const initialExpirationDateValues = Object.fromEntries(expirationDateInfos.map(({ id }) => [id, ""]));

const initialPasswordValues = Object.fromEntries(passwordInfos.map(({ id }) => [id, ""]));

const CardAddForm = ({ addCardInfo, onBackButtonClick }) => {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [isBankSelectorVisible, setBankSelectorVisible] = useState(false);
  const [isToolTipVisible, setToolTipVisible] = useState(false);

  const [bank, setBank] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const [
    cardNumberValues,
    handleCardNumberValuesChange,
    { error: cardNumberError, touched: cardNumberTouched },
  ] = useInputs(initialCardNumberValues, { validate: validateCardNumbers });

  const [
    expirationDateValues,
    handleExpirationDateValuesChange,
    { error: expirationDateError, touched: expirationDateTouched },
  ] = useInputs(initialExpirationDateValues, { validate: validateExpirationDate });

  const [ownerName, handleOwnerNameChange, { error: ownerNameError, touched: ownerNameTouched }] = useInput("", {
    validate: validateOwnerName,
  });

  const [
    securityCode,
    handleSecurityCodeChange,
    { error: securityCodeError, touched: securityCodeTouched },
  ] = useInput("", { validate: validateSecurityCode });

  const [
    passwordValues,
    handlePasswordsChange,
    { error: passwordError, touched: passwordTouched },
  ] = useInputs(initialPasswordValues, { validate: validatePasswords });

  const validateForm = () => {
    if (bank === "" || backgroundColor === "") {
      return "카드회사를 선택해주세요.";
    }

    return [cardNumberError, expirationDateError, ownerNameError, securityCodeError, passwordError].find(Boolean) ?? "";
  };

  const handleCardClick = () => {
    setBankSelectorVisible(!isBankSelectorVisible);
  };

  const handleBankClick = (bgColor, bankName) => {
    setBankSelectorVisible(false);
    setBackgroundColor(bgColor);
    setBank(bankName);
  };

  const handleToolTipClick = () => setToolTipVisible(!isToolTipVisible);

  const bindCardInfo = () => {
    const cardNumbers = cardNumberInfos.map(({ id }) => cardNumberValues[id]);

    const expirationDate = expirationDateInfos.map(({ id }) => expirationDateValues[id]);

    const passwords = passwordInfos.map(({ id }) => passwordValues[id]);

    return { bank, backgroundColor, cardNumbers, expirationDate, ownerName, securityCode, passwords };
  };

  const handleSubmit = event => {
    event.preventDefault();

    const error = validateForm();

    if (error) {
      setFormErrorMessage(error);
      return;
    }

    addCardInfo(bindCardInfo());
  };

  return (
    <>
      <Header hasBackButton title="카드 추가" onBackButtonClick={onBackButtonClick} />
      <form
        className="flex flex-col justify-between w-full h-full"
        aria-describedby="form-error"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="flex justify-center mb-4 w-full">
            <Card
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...bindCardInfo()}
              isRegistered={false}
              onClick={handleCardClick}
            />
          </div>

          <InputBox>
            <InputLabel>
              <InputTitle>카드 번호</InputTitle>
            </InputLabel>

            <InputContent>
              <div
                className={cx(
                  "flex items-center justify-around w-full text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
                  cardNumberTouched && cardNumberError && "ring-2 ring-rose-400"
                )}
                aria-describedby="card-number-error"
              >
                {cardNumberInfos.map(({ id, type, minLength, maxLength, label }, index) => (
                  <React.Fragment key={id}>
                    {index > 0 && <span>-</span>}
                    <Input
                      id={id}
                      type={type}
                      label={label}
                      className="appearance-textfield w-full outline-none"
                      name={id}
                      minLength={minLength}
                      maxLength={maxLength}
                      value={cardNumberValues[id]}
                      onChange={handleCardNumberValuesChange}
                      inputmode="numeric"
                    />
                  </React.Fragment>
                ))}
              </div>
            </InputContent>
            <InputValidationMessage id="card-number-error">
              {cardNumberTouched ? cardNumberError : ""}
            </InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>만료일</InputTitle>
            </InputLabel>

            <InputContent>
              <div
                className={cx(
                  "text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
                  expirationDateTouched && expirationDateError && "ring-2 ring-rose-400"
                )}
                aria-describedby="expiration-date-error"
              >
                {expirationDateInfos.map(({ id, placeholder, label }, index) => (
                  <React.Fragment key={id}>
                    {index > 0 && <span>/</span>}
                    <Input
                      id={id}
                      type="text"
                      placeholder={placeholder}
                      className="appearance-textfield w-14 outline-none"
                      minLength="2"
                      maxLength="2"
                      inputmode="numeric"
                      name={id}
                      value={expirationDateValues[id]}
                      onChange={handleExpirationDateValuesChange}
                      label={label}
                    />
                  </React.Fragment>
                ))}
              </div>
            </InputContent>

            <InputValidationMessage id="expiration-date-error">
              {expirationDateTouched ? expirationDateError : ""}
            </InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>카드 소유자 이름(선택)</InputTitle>
              <span className="text-custom-gray-300 text-xs font-medium">{ownerName.length}/30</span>
            </InputLabel>
            <InputContent>
              <Input
                id="owner-name-input"
                type="text"
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                className={cx("w-full outline-none", ownerNameTouched && ownerNameError && "ring-2 ring-rose-400")}
                value={ownerName}
                onChange={handleOwnerNameChange}
                label="카드 소유자 이름 입력란"
                minLength="0"
                maxLength="30"
                aria-describedby="owner-name-error"
              />
            </InputContent>
            <InputValidationMessage id="owner-name-error">
              {ownerNameTouched ? ownerNameError : ""}
            </InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>보안코드(CVC/CVV)</InputTitle>
            </InputLabel>
            <InputContent>
              <Input
                id="security-code-input"
                type="password"
                className={cx("w-20 outline-none", securityCodeTouched && securityCodeError && "ring-2 ring-rose-400")}
                minLength="3"
                maxLength="4"
                value={securityCode}
                onChange={handleSecurityCodeChange}
                inputmode="numeric"
                label="보안 코드 입력란"
                aria-describedby="security-code-error"
              />
              <QuestionIcon onClick={handleToolTipClick} />
              <ToolTip isVisible={isToolTipVisible}>카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요.</ToolTip>
            </InputContent>

            <InputValidationMessage id="security-code-error">
              {securityCodeTouched ? securityCodeError : ""}
            </InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>카드 비밀번호</InputTitle>
            </InputLabel>
            <InputContent>
              <section className="flex items-center w-full space-x-2" aria-describedby="password-error">
                {passwordInfos.map(({ id, label }) => (
                  <Input
                    key={id}
                    id={id}
                    type="password"
                    className={cx(
                      "w-10 text-center outline-none",
                      passwordTouched && passwordError && "ring-2 ring-rose-400"
                    )}
                    minLength="1"
                    maxLength="1"
                    inputmode="numeric"
                    name={id}
                    value={passwordValues[id]}
                    label={label}
                    onChange={handlePasswordsChange}
                  />
                ))}
                <div className="flex justify-center w-10">
                  <Circle width="5" height="5" />
                </div>
                <div className="flex justify-center w-10">
                  <Circle width="5" height="5" />
                </div>
              </section>
            </InputContent>
            <InputValidationMessage id="password-error">{passwordTouched ? passwordError : ""}</InputValidationMessage>
          </InputBox>
        </div>

        <div className="flex items-center justify-between h-10">
          <InputValidationMessage id="form-error">
            <span className="text-center text-sm">{formErrorMessage}</span>
          </InputValidationMessage>
          <Button type="submit" className="px-2 py-1 rounded focus:outline-none focus:ring-blue-400 focus:ring-2">
            다음
          </Button>
        </div>
      </form>

      {isBankSelectorVisible && (
        <Modal>
          <BankSelector onClick={handleBankClick} />
        </Modal>
      )}
    </>
  );
};

CardAddForm.propTypes = {
  addCardInfo: PropTypes.func.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
};

export default CardAddForm;
