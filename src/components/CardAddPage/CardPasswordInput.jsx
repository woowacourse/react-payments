import classNames from "classnames";
import React from "react";
import { CARD_INFO, getId, LENGTH } from "../../utils";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";

const inputProps = [{ id: getId() }, { id: getId() }];

const CardPasswordInput = ({ cardPasswords, isValid, onChange }) => {
  return (
    <>
      <div className="mb-2 h-6">
        <InputTitle innerText="카드 비밀번호" />
      </div>
      <div className="flex items-center justify-between w-48">
        {inputProps.map(({ id }, index) => (
          <React.Fragment key={id}>
            <label className="sr-only" htmlFor="card-password-input-1"></label>
            <Input
              type="password"
              className={classNames("w-10 outline-none text-center", !isValid && "ring-2 ring-rose-400")}
              data-index={index}
              name={CARD_INFO.CARD_PASSWORDS}
              minLength={LENGTH.CARD_PASSWORDS.MIN}
              maxLength={LENGTH.CARD_PASSWORDS.MAX}
              value={cardPasswords[index]}
              onChange={onChange}
            />
          </React.Fragment>
        ))}
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
    </>
  );
};

export default CardPasswordInput;
