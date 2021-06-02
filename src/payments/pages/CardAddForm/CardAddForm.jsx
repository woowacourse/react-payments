/* eslint-disable no-console */
import React, { useState } from "react";
import PropTypes from "prop-types";
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

const CardAddForm = ({ addCardInfo, onBackButtonClick }) => {
  const [isBankSelectorVisible, setBankSelectorVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [bank, setBank] = useState("");

  const [isToolTipVisible, setToolTipVisible] = useState(false);

  const [cardNumberValues, handleCardNumberValuesChange, { error: cardNumberError }] = useInputs(
    Object.fromEntries(cardNumberInfos.map(({ id }) => [id, ""])),
    { validate: validateCardNumbers }
  );

  const [expirationDateValues, handleExpirationDateValuesChange, { error: expirationDateError }] = useInputs(
    Object.fromEntries(expirationDateInfos.map(({ id }) => [id, ""])),
    {
      validate: validateExpirationDate,
    }
  );

  const [ownerName, handleOwnerNameChange, { error: ownerNameError }] = useInput("", { validate: validateOwnerName });

  const [securityCode, handleSecurityCodeChange, { error: securityCodeError }] = useInput("", {
    validate: validateSecurityCode,
  });

  const [passwordValues, handlePasswordsChange, { error: passwordError }] = useInputs(
    Object.fromEntries(passwordInfos.map(({ id }) => [id, ""])),
    { validate: validatePasswords }
  );

  const isNextButtonVisible = [
    bank !== "",
    backgroundColor !== "",
    !cardNumberError,
    !expirationDateError,
    !ownerNameError,
    !securityCodeError,
    !passwordError,
  ].every(Boolean);

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
    const cardNumbers = cardNumberInfos.map(({ id, type }) =>
      type === "password" ? "*".repeat(cardNumberValues[id].length) : cardNumberValues[id]
    );

    const expirationDate = expirationDateInfos.map(({ id }) => expirationDateValues[id]);

    const passwords = passwordInfos.map(({ id }) => passwordValues[id]);

    return { bank, backgroundColor, cardNumbers, expirationDate, ownerName, securityCode, passwords };
  };

  const handleSubmit = event => {
    event.preventDefault();

    addCardInfo(bindCardInfo());
  };

  return (
    <>
      <Header hasBackButton title="카드 추가" onBackButtonClick={onBackButtonClick} />
      <form className="flex flex-col justify-between w-full h-full" onSubmit={handleSubmit}>
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
                className="flex items-center justify-around w-full text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md"
                aria-describedby="card-number-error"
              >
                {cardNumberInfos.map(({ id, type, minLength, maxLength, label }, index) => (
                  <React.Fragment key={id}>
                    {index > 0 && <span>-</span>}
                    <Input
                      id={id}
                      type={type}
                      label={label}
                      className="appearance-textfield w-full"
                      name={id}
                      minLength={minLength}
                      maxLength={maxLength}
                      value={cardNumberValues[id]}
                      onChange={handleCardNumberValuesChange}
                      inputmode="numeric"
                      required
                    />
                  </React.Fragment>
                ))}
              </div>
            </InputContent>
            <InputValidationMessage id="card-number-error">{cardNumberError}</InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>만료일</InputTitle>
            </InputLabel>

            <InputContent>
              <div
                className="text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md"
                aria-describedby="expiration-date-error"
              >
                {expirationDateInfos.map(({ id, placeholder, label }, index) => (
                  <React.Fragment key={id}>
                    {index > 0 && <span>/</span>}
                    <Input
                      id={id}
                      type="number"
                      placeholder={placeholder}
                      className="appearance-textfield w-14"
                      minLength="2"
                      maxLength="2"
                      inputmode="numeric"
                      name={id}
                      value={expirationDateValues[id]}
                      onChange={handleExpirationDateValuesChange}
                      label={label}
                      required
                    />
                  </React.Fragment>
                ))}
              </div>
            </InputContent>

            <InputValidationMessage id="expiration-date-error">{expirationDateError}</InputValidationMessage>
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
                className="w-full"
                value={ownerName}
                onChange={handleOwnerNameChange}
                label="카드 소유자 이름 입력란"
                minLength="0"
                maxLength="30"
                aria-describedby="owner-name-error"
              />
            </InputContent>
            <InputValidationMessage id="owner-name-error">{ownerNameError}</InputValidationMessage>
          </InputBox>

          <InputBox>
            <InputLabel>
              <InputTitle>보안코드(CVC/CVV)</InputTitle>
            </InputLabel>
            <InputContent>
              <Input
                id="security-code-input"
                type="password"
                className="w-20"
                minLength="3"
                maxLength="4"
                value={securityCode}
                onChange={handleSecurityCodeChange}
                inputmode="numeric"
                label="보안 코드 입력란"
                aria-describedby="security-code-error"
                required
              />
              <QuestionIcon onClick={handleToolTipClick} />
              <ToolTip isVisible={isToolTipVisible}>카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요.</ToolTip>
            </InputContent>

            <InputValidationMessage id="security-code-error">{securityCodeError}</InputValidationMessage>
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
                    className="w-10 text-center"
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
            <InputValidationMessage id="password-error">{passwordError}</InputValidationMessage>
          </InputBox>
        </div>

        {isNextButtonVisible && (
          <div className="flex justify-end">
            <Button type="submit" className="h-10">
              다음
            </Button>
          </div>
        )}
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
