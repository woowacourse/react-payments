import React from "react";
import classNames from "classnames";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import { CARD_INFO, getId, LENGTH } from "../../utils";

const inputProps = [
  { id: getId(), type: "text" },
  { id: getId(), type: "text" },
  { id: getId(), type: "password" },
  { id: getId(), type: "password" },
];

const CardNumbersInput = ({ cardNumbers, isValid, onChange }) => {
  return (
    <div className={classNames("flex flex-col w-full mb-2", !isValid && "")}>
      <div className="mb-2 h-6">
        <InputTitle innerText="카드 번호" />
      </div>
      <label className="sr-only" htmlFor="card-number-input">
        카드 번호 입력란
      </label>
      <div
        className={classNames(
          "bg-custom-gray-100 rounded-md flex justify-around items-center text-custom-mint text-lg font-medium",
          !isValid && "ring-2 ring-rose-400"
        )}
      >
        {inputProps.map(({ id, type }, index) => (
          <React.Fragment key={id}>
            {index > 0 && "-"}
            <label htmlFor={`card-number-input-${index}`}></label>
            <Input
              id={`card-number-input-${index}`}
              type={type}
              className="w-1/5 outline-none"
              name={CARD_INFO.CARD_NUMBERS}
              data-index={index}
              minLength={LENGTH.CARD_NUMBER.MIN}
              maxLength={LENGTH.CARD_NUMBER.MAX}
              onChange={onChange}
              value={cardNumbers[index]}
              required
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CardNumbersInput;
