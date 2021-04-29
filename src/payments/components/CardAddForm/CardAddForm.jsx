import React, { useState } from "react";
import classNames from "classnames";
import { ERROR_TYPE, getId, throwError } from "../../../@shared/utils";
import Card from "../Card/Card";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import Button from "../Button/Button";
import Header from "../Header/Header";
import BankSelector from "../BankSelector/BankSelector";
import Dimmer from "../Dimmer/Dimmer";

const initialNumberInfos = [
  { id: getId(), type: "text", value: "", minLength: "4", maxLength: "4" },
  { id: getId(), type: "text", value: "", minLength: "4", maxLength: "4" },
  { id: getId(), type: "password", value: "", minLength: "4", maxLength: "4" },
  { id: getId(), type: "password", value: "", minLength: "3", maxLength: "4" },
];

const CardAddForm = props => {
  const [isBankSelectorVisible, setBankSelectorVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [bank, setBank] = useState(null);
  const [numberInfos, setNumberInfos] = useState(initialNumberInfos);
  const [isNumberInfosValid, setNumberInfosValid] = useState(null);
  const [expirationDate, setExpirationDate] = useState("");
  const [isExpirationDateValid, setExpirationDateValid] = useState(null);
  const [ownerName, setOwnerName] = useState("");
  const [isOwnerNameValid, setOwnerNameValid] = useState(true);
  const [securityCode, setSecurityCode] = useState("");
  const [isSecurityCodeValid, setSecurityCodeValid] = useState(null);
  const [isToolTipVisible, setToolTipVisible] = useState(false);
  const [passwords, setPasswords] = useState(Array(2).fill(null));
  const [isPasswordValid, setPasswordValid] = useState(null);

  const handleCardClick = () => {
    setBankSelectorVisible(!isBankSelectorVisible);
  };

  const handleBankClick = (backgroundColor, bank) => {
    setBankSelectorVisible(false);
    setBackgroundColor(backgroundColor);
    setBank(bank);
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

  const validateNumberInfos = numberInfos => {
    if (!Array.isArray(numberInfos)) {
      throw new TypeError("numberInfos should be an array");
    }

    const isValid = numberInfos.every(({ value, minLength, maxLength }) => {
      return new RegExp(`^[\\d]{${minLength},${maxLength}}$`).test(value);
    });

    if (!isValid) {
      throwError("Invalid numberInfos", ERROR_TYPE.VALIDATION);
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

  const validateOwnerName = name => {
    const rName = /^[가-힣|A-Z|\s]{0,30}$/;

    if (!rName.test(name)) {
      throwError(`Invalid owner name: ${name}`, ERROR_TYPE.VALIDATION);
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

  const validateSecurityCode = code => {
    const rCode = /^[\d]{3,4}$/;

    if (!rCode.test(code)) {
      throwError(`Invalid security code: ${code}`, ERROR_TYPE.VALIDATION);
    }
  };

  const handleToolTipClick = () => {
    setToolTipVisible(!isToolTipVisible);
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

  const validatePasswords = passwords => {
    if (!Array.isArray(passwords)) {
      throw new TypeError("passwords should be an array");
    }

    const rCode = /^[\d]{1}$/;

    if (passwords.some(number => !rCode.test(number))) {
      throwError("Invalid password", ERROR_TYPE.VALIDATION);
    }
  };

  return (
    <>
      <Header hasBackButton={true} title={"카드 추가"} />
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
                "flex items-center justify-around text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
                !(isNumberInfosValid ?? true) && "ring-2 ring-rose-400"
              )}
            >
              {numberInfos.map(({ id, type, value }, index) => (
                <React.Fragment key={id}>
                  {index > 0 && "-"}
                  <label className="sr-only" htmlFor={`card-number-input-${index}`}>
                    {`카드 번호 입력란 ${index}`}
                  </label>
                  <Input
                    id={`card-number-input-${index}`}
                    type={type}
                    className="w-1/5 outline-none"
                    name={index}
                    minLength="4"
                    maxLength="4"
                    value={value}
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
            <label className="sr-only" htmlFor="expiration-date-input">
              만료일 입력란
            </label>
            <Input
              id="expiration-date-input"
              type="text"
              placeholder="MM/YY"
              className="w-36"
              minLength="5"
              maxLength="5"
              value={expirationDate}
              isValid={isExpirationDateValid ?? true}
              onChange={handleExpirationDateChange}
              required
            />
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="flex items-center justify-between mb-2 h-6">
              <InputTitle innerText="카드 소유자 이름(선택)" />
              <span className="text-custom-gray-300 text-xs font-medium">{ownerName.length}/30</span>
            </div>
            <label className="sr-only" htmlFor="owner-name-input">
              카드 소유자 이름 입력란
            </label>
            <Input
              id="owner-name-input"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              className="w-full"
              value={ownerName}
              isValid={isOwnerNameValid}
              onChange={handleOwnerNameChange}
              minLength="0"
              maxLength="30"
            />
          </div>
          <div className="flex flex-col mb-2 w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="보안코드(CVC/CVV)" />
            </div>
            <label className="sr-only" htmlFor="security-code-input">
              보안 코드 입력란
            </label>
            <div className="flex items-center">
              <Input
                type="password"
                className="w-20"
                minLength="3"
                maxLength="4"
                value={securityCode}
                onChange={handleSecurityCodeChange}
                isValid={isSecurityCodeValid ?? true}
                required
              />
              <svg
                width="27"
                height="27"
                className="ml-3 cursor-pointer"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleToolTipClick}
              >
                <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#BABABA" />
                <path
                  d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
                  fill="#969696"
                />
              </svg>
              <div className={classNames("flex items-center", isToolTipVisible ? "visible" : "invisible")}>
                <span className="left-arrow w-0 h-0 border-8 border-custom-darkgray"></span>
                <span className="p-2 text-custom-white text-xs bg-custom-darkgray rounded-lg">
                  카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="카드 비밀번호" />
            </div>
            <div className="flex items-center justify-between w-48">
              <label className="sr-only" htmlFor="card-password-input-1"></label>
              <Input
                type="password"
                className="w-10 text-center"
                minLength="1"
                maxLength="1"
                name="0"
                value={passwords[0] || ""}
                isValid={isPasswordValid ?? true}
                onChange={handlePasswordChange}
              />
              <label className="sr-only" htmlFor="card-password-input-2"></label>
              <Input
                type="password"
                className="w-10 text-center"
                minLength="1"
                maxLength="1"
                name="1"
                value={passwords[1] || ""}
                isValid={isPasswordValid ?? true}
                onChange={handlePasswordChange}
              />
              <div className="flex justify-center w-10">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
              <div className="flex justify-center w-10">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-end w-full h-10">
        {[
          bank,
          backgroundColor,
          isNumberInfosValid,
          isExpirationDateValid,
          isOwnerNameValid,
          isSecurityCodeValid,
          isPasswordValid,
        ].every(Boolean) && (
          <Button
            name="다음"
            onClick={() => {
              props.addCardInfo({
                bank,
                backgroundColor,
                numberInfos,
                expirationDate,
                ownerName,
                securityCode,
                passwords,
              });
            }}
          />
        )}
      </div>

      {isBankSelectorVisible && (
        <>
          <Dimmer />
          <BankSelector onClick={handleBankClick} />
        </>
      )}
    </>
  );
};

export default CardAddForm;
