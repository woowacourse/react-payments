/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ERROR_TYPE, throwError } from "../../../@shared/utils";
import Card from "../Card/Card";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import Button from "../Button/Button";
import Header from "../Header/Header";
import BankSelector from "../BankSelector/BankSelector";
import Circle from "../Circle/Circle";
import Modal from "../Modal/Modal";
import QuestionIcon from "../ToolTip/QuestionIcon";
import ToolTip from "../ToolTip/ToolTip";

const initialNumberInfos = [
  { id: "number-info-0", type: "text", value: "", minLength: "4", maxLength: "4" },
  { id: "number-info-1", type: "text", value: "", minLength: "4", maxLength: "4" },
  { id: "number-info-2", type: "password", value: "", minLength: "4", maxLength: "4" },
  { id: "number-info-3", type: "password", value: "", minLength: "3", maxLength: "4" },
];

const CardAddForm = ({ addCardInfo }) => {
  const [isBankSelectorVisible, setBankSelectorVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [bank, setBank] = useState("");
  const [numberInfos, setNumberInfos] = useState(initialNumberInfos);
  const [isNumberInfosValid, setNumberInfosValid] = useState(true);
  const [expirationDate, setExpirationDate] = useState("");
  const [isExpirationDateValid, setExpirationDateValid] = useState(true);
  const [ownerName, setOwnerName] = useState("");
  const [isOwnerNameValid, setOwnerNameValid] = useState(true);
  const [securityCode, setSecurityCode] = useState("");
  const [isSecurityCodeValid, setSecurityCodeValid] = useState(true);
  const [isToolTipVisible, setToolTipVisible] = useState(false);
  const [passwords, setPasswords] = useState(Array(2).fill(""));
  const [isPasswordValid, setPasswordValid] = useState(true);
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  const isNextButtonVisible = [
    isMountedRef.current,
    bank,
    backgroundColor,
    isNumberInfosValid,
    isExpirationDateValid,
    isOwnerNameValid,
    isSecurityCodeValid,
    isPasswordValid,
  ].every(Boolean);

  const handleCardClick = () => {
    setBankSelectorVisible(!isBankSelectorVisible);
  };

  const handleBankClick = (bgColor, bankName) => {
    setBankSelectorVisible(false);
    setBackgroundColor(bgColor);
    setBank(bankName);
  };

  const validateNumberInfos = infos => {
    if (!Array.isArray(infos)) {
      throw new TypeError("numberInfos should be an array");
    }

    const isValid = infos.every(({ value, minLength, maxLength }) =>
      new RegExp(`^[\\d]{${minLength},${maxLength}}$`).test(value)
    );

    if (!isValid) {
      throwError("Invalid numberInfos", ERROR_TYPE.VALIDATION);
    }
  };

  const handleNumberInfoChange = event => {
    try {
      const { value, name } = event.target;
      const replacedValue = value.replace(/[\D]/g, "");
      const targetIndex = Number(name);
      const newNumberInfos = numberInfos.map((numberInput, index) =>
        index === targetIndex ? { ...numberInput, value: replacedValue } : numberInput
      );

      setNumberInfos(newNumberInfos);
      validateNumberInfos(newNumberInfos);
      setNumberInfosValid(true);
    } catch (error) {
      if (error.type === ERROR_TYPE.VALIDATION) {
        setNumberInfosValid(false);

        return;
      }

      console.error(error.message);
    }
  };

  const validateExpirationDate = date => {
    if (date.length !== 4) {
      throwError("Invalid date", ERROR_TYPE.VALIDATION);
    }

    const month = date.slice(0, 2);
    const year = date.slice(2, 4);
    const currentYear = new Date().getFullYear() - 2000;

    if (Number(month) < 1 || Number(month) > 12) {
      throwError("Invalid month", ERROR_TYPE.VALIDATION);
    }
    if (year < currentYear || year > currentYear + 5) {
      throwError("Invalid year", ERROR_TYPE.VALIDATION);
    }
  };

  const handleExpirationDateChange = event => {
    try {
      const { value } = event.target;
      const replacedValue = value.replace(/[\D]/g, "");
      const newValue =
        replacedValue.length > 2 ? `${replacedValue.slice(0, 2)}/${replacedValue.slice(2)}` : replacedValue;

      setExpirationDate(newValue);
      validateExpirationDate(replacedValue);
      setExpirationDateValid(true);

      // TODO: 커서위치 고정
    } catch (error) {
      if (error.type === ERROR_TYPE.VALIDATION) {
        setExpirationDateValid(false);

        return;
      }

      console.error(error.message);
    }
  };

  const validateOwnerName = name => {
    const rName = /^[가-힣|A-Z|\s]{0,30}$/;

    if (!rName.test(name)) {
      throwError(`Invalid owner name: ${name}`, ERROR_TYPE.VALIDATION);
    }
  };

  const handleOwnerNameChange = event => {
    try {
      const value = event.target.value.toUpperCase();

      setOwnerName(value);
      validateOwnerName(value);
      setOwnerNameValid(true);
    } catch (error) {
      if (error.type === ERROR_TYPE.VALIDATION) {
        setOwnerNameValid(false);

        return;
      }

      console.error(error.message);
    }
  };

  const validateSecurityCode = code => {
    const rCode = /^[\d]{3,4}$/;

    if (!rCode.test(code)) {
      throwError(`Invalid security code: ${code}`, ERROR_TYPE.VALIDATION);
    }
  };

  const handleSecurityCodeChange = event => {
    try {
      const { value } = event.target;
      const replacedValue = value.replace(/[\D]/g, "");

      setSecurityCode(replacedValue);
      validateSecurityCode(replacedValue);
      setSecurityCodeValid(true);
    } catch (error) {
      if (error.type === ERROR_TYPE.VALIDATION) {
        setSecurityCodeValid(false);

        return;
      }

      console.error(error.message);
    }
  };

  const handleToolTipClick = () => setToolTipVisible(!isToolTipVisible);

  const validatePasswords = newPasswords => {
    if (!Array.isArray(newPasswords)) {
      throw new TypeError("passwords should be an array");
    }

    const rCode = /^[\d]{1}$/;

    if (newPasswords.some(number => !rCode.test(number))) {
      throwError("Invalid password", ERROR_TYPE.VALIDATION);
    }
  };

  const handlePasswordChange = event => {
    try {
      const { value } = event.target;
      const targetIndex = Number(event.target.name);
      const replacedValue = value.replace(/[\D]/g, "");
      const newPasswords = passwords.map((password, index) => (index === targetIndex ? replacedValue : password));

      setPasswords(newPasswords);
      validatePasswords(newPasswords);
      setPasswordValid(true);
    } catch (error) {
      if (error.type === ERROR_TYPE.VALIDATION) {
        setPasswordValid(false);

        return;
      }

      console.error(error.message);
    }
  };

  return (
    <>
      <Header hasBackButton title="카드 추가" />
      <form className="flex flex-col justify-center w-full h-160">
        <div>
          <div className="flex justify-center mb-4 w-full">
            <Card
              backgroundColor={backgroundColor}
              bank={bank}
              numberInfos={numberInfos}
              expirationDate={expirationDate}
              ownerName={ownerName}
              isRegistered={false}
              onClick={handleCardClick}
            />
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="카드 번호" />
            </div>
            <div
              className={classNames(
                "flex items-center justify-around w-full text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
                !isNumberInfosValid && "ring-2 ring-rose-400"
              )}
            >
              {numberInfos.map(({ id, type, value }, index) => (
                <React.Fragment key={id}>
                  {index > 0 && "-"}
                  <Input
                    id={`card-number-input-${index}`}
                    type={type}
                    className="w-full outline-none"
                    name={index}
                    minLength="4"
                    maxLength="4"
                    inputmode="numeric"
                    value={value}
                    label={`카드 번호 입력란 ${index}`}
                    onChange={handleNumberInfoChange}
                    required
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="만료일" />
            </div>

            <Input
              id="expiration-date-input"
              type="text"
              placeholder="MM/YY"
              className="w-36"
              minLength="5"
              maxLength="5"
              inputmode="numeric"
              value={expirationDate}
              isValid={isExpirationDateValid}
              onChange={handleExpirationDateChange}
              label="만료일"
              required
            />
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="flex items-center justify-between mb-2 h-6">
              <InputTitle innerText="카드 소유자 이름(선택)" />
              <span className="text-custom-gray-300 text-xs font-medium">{ownerName.length}/30</span>
            </div>
            <Input
              id="owner-name-input"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              className="w-full"
              value={ownerName}
              isValid={isOwnerNameValid}
              onChange={handleOwnerNameChange}
              label="카드 소유자 이름 입력란"
              minLength="0"
              maxLength="30"
            />
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="보안코드(CVC/CVV)" />
            </div>
            <div className="flex items-center">
              <Input
                id="security-code-input"
                type="password"
                className="w-20"
                minLength="3"
                maxLength="4"
                value={securityCode}
                onChange={handleSecurityCodeChange}
                inputmode="numeric"
                isValid={isSecurityCodeValid}
                label="보안 코드 입력란"
                required
              />
              <QuestionIcon onClick={handleToolTipClick} />
              <ToolTip isVisible={isToolTipVisible} />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="카드 비밀번호" />
            </div>
            <div className="flex items-center justify-between w-48">
              <Input
                id="password-input-0"
                type="password"
                className="w-10 text-center"
                minLength="1"
                maxLength="1"
                inputmode="numeric"
                name="0"
                value={passwords[0] || ""}
                isValid={isPasswordValid}
                label="카드 비밀번호1"
                onChange={handlePasswordChange}
              />
              <Input
                id="password-input-1"
                type="password"
                className="w-10 text-center"
                minLength="1"
                maxLength="1"
                name="1"
                inputmode="numeric"
                value={passwords[1] || ""}
                isValid={isPasswordValid}
                label="카드 비밀번호2"
                onChange={handlePasswordChange}
              />
              <div className="flex justify-center w-10">
                <Circle width="5" height="5" />
              </div>
              <div className="flex justify-center w-10">
                <Circle width="5" height="5" />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-end w-full h-10">
        {isNextButtonVisible && (
          <Button
            name="다음"
            onClick={() => {
              addCardInfo({
                bank,
                backgroundColor,
                numberInfos,
                expirationDate,
                ownerName,
                securityCode,
                passwords,
                isRegistered: true,
              });
            }}
          />
        )}
      </div>

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
};

export default CardAddForm;
