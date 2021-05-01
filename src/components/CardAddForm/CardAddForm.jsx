import React, { useState } from "react";
import Card from "../Card/Card";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import Button from "../Button/Button";
import CardNumbersInput from "./CardNumbersInput";
import ExpirationDateInput from "./ExpirationDateInput";
import { CARD_INFO, checkValidation } from "../../utils";

const initialValidation = {
  [CARD_INFO.CARD_NUMBERS]: true,
  [CARD_INFO.EXPIRATION_MONTH]: true,
  [CARD_INFO.EXPIRATION_YEAR]: true,
  [CARD_INFO.OWNER_NAME]: true,
  [CARD_INFO.SECURITY_CODE]: true,
  [CARD_INFO.CARD_PASSWORDS]: true,
};

const CardAddForm = ({ cardInfo, setCardInfo }) => {
  const [validation, setValidation] = useState(initialValidation);
  const [backgroundColor] = useState(null);
  const [bank] = useState(null);
  const [numbers] = useState([]);
  const [expirationDate] = useState("");
  const [ownerName] = useState("");
  const [securityCode] = useState("");
  const [password] = useState([]);
  const [isToolTipVisible] = useState(false);

  const handleInputChange = event => {
    try {
      const { name, value } = event.target;
      const targetIndex = Number(event.target.dataset.index);
      const newValue = !Number.isNaN(targetIndex)
        ? cardInfo[name].map((prevValue, index) => (index === targetIndex ? value : prevValue))
        : value;

      setCardInfo({ ...cardInfo, [name]: newValue });
      checkValidation(name, newValue);
      setValidation({ ...validation, [name]: true });
    } catch (error) {
      if (error.type === "validation") {
        setValidation({ ...validation, [error.message]: false });

        return;
      }

      console.error(error.message);
    }
  };

  return (
    <>
      <form className="w-full h-160 flex flex-col justify-center">
        <div>
          <div className="w-full flex justify-center mb-4">
            <Card
              backgroundColor={backgroundColor}
              bank={bank}
              numbers={numbers}
              expirationDate={expirationDate}
              ownerName={ownerName}
              isRegistered={false}
            />
          </div>
          <CardNumbersInput
            cardNumbers={cardInfo.cardNumbers}
            isValid={validation.cardNumbers}
            onChange={handleInputChange}
          />
          <ExpirationDateInput
            expirationMonth={cardInfo.expirationMonth}
            expirationYear={cardInfo.expirationYear}
            isValid={validation.expirationMonth && validation.expirationYear}
            onChange={handleInputChange}
          />
          <div className="flex flex-col w-full mb-2">
            <div className="mb-2 h-6 flex justify-between items-center">
              <InputTitle innerText="카드 소유자 이름(선택)" />
              <span className="text-custom-gray-300 font-medium text-xs">{ownerName.length}/30</span>
            </div>
            <label className="sr-only" htmlFor="owner-name-input">
              카드 소유자 이름 입력란
            </label>
            <Input
              id="owner-name-input"
              type="text"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full mb-2">
            <div className="mb-2 h-6">
              <InputTitle innerText="보안코드(CVC/CVV)" />
            </div>
            <label className="sr-only" htmlFor="security-code-input">
              보안 코드 입력란
            </label>
            <div className="flex items-center">
              <Input type="password" className="w-20" minLength="3" maxLength="4" value={securityCode} required />
              <svg
                width="27"
                height="27"
                className="ml-3 cursor-pointer"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#BABABA" />
                <path
                  d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
                  fill="#969696"
                />
              </svg>
              {isToolTipVisible && (
                <>
                  <span className="w-0 h-0 border-8 border-custom-darkgray left-arrow"></span>
                  <span className="bg-custom-darkgray rounded-lg p-2 text-custom-white text-xs">
                    카드 뒷면 서명란 끝의 3~4자리 숫자를 입력해주세요.
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-2 h-6">
              <InputTitle innerText="카드 비밀번호" />
            </div>
            <div className="flex items-center justify-between w-48">
              <label className="sr-only" htmlFor="card-password-input-1"></label>
              <Input type="password" className="w-10" minLength="1" maxLength="1" value={password[0]} />
              <label className="sr-only" htmlFor="card-password-input-2"></label>
              <Input type="password" className="w-10" minLength="1" maxLength="1" value={password[1]} />
              <div className="w-10 flex justify-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
              <div className="w-10 flex justify-center">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#04C09E" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="flex justify-end items-center w-full h-10">
        <Button name="다음" />
      </div>
    </>
  );
};

export default CardAddForm;
