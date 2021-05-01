import classNames from "classnames";
import React from "react";
import { CARD_INFO, LENGTH } from "../../utils";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";

const ExpirationDateInput = ({ expirationMonth, expirationYear, isValid, onChange }) => {
  return (
    <div className="flex flex-col mb-2">
      <div className="mb-2 h-6">
        <InputTitle innerText="만료일" />
      </div>
      <div
        className={classNames(
          "w-1/3 bg-custom-gray-100 rounded-md flex justify-around items-center text-custom-mint text-lg font-medium",
          !isValid && "ring-2 ring-rose-400"
        )}
      >
        <label className="sr-only" htmlFor="expiration-month-input">
          만료 월 입력란
        </label>
        <Input
          id="expiration-month-input"
          type="text"
          className="w-1/2 outline-none placeholder-center"
          name={CARD_INFO.EXPIRATION_MONTH}
          placeholder="MM"
          minLength={LENGTH.EXPIRATION_DATE.MIN}
          maxLength={LENGTH.EXPIRATION_DATE.MAX}
          value={expirationMonth}
          onChange={onChange}
          required
        />
        /
        <label className="sr-only" htmlFor="expiration-year-input">
          만료 연도 입력란
        </label>
        <Input
          id="expiration-year-input"
          type="text"
          className="w-1/2 outline-none"
          name={CARD_INFO.EXPIRATION_YEAR}
          placeholder="YY"
          minLength={LENGTH.EXPIRATION_DATE.MIN}
          maxLength={LENGTH.EXPIRATION_DATE.MAX}
          value={expirationYear}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default ExpirationDateInput;
