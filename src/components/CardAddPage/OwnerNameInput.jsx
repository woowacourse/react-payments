import classNames from "classnames";
import React from "react";
import Input from "../Input/Input";
import InputTitle from "../InputTitle/InputTitle";
import { CARD_INFO, LENGTH } from "../../utils";

const OwnerNameInput = ({ ownerName, isValid, onChange }) => {
  return (
    <>
      <div className="mb-2 h-6 flex justify-between items-center">
        <InputTitle innerText="카드 소유자 이름(선택)" />
        <span className="text-custom-gray-300 font-medium text-xs">
          {ownerName.length}/{LENGTH.OWNER_NAME.MAX}
        </span>
      </div>
      <label className="sr-only" htmlFor="owner-name-input">
        카드 소유자 이름 입력란
      </label>
      <Input
        id="owner-name-input"
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        name={CARD_INFO.OWNER_NAME}
        className={classNames("w-full outline-none", !isValid && "ring-2 ring-rose-400")}
        min={LENGTH.OWNER_NAME.MIN}
        max={LENGTH.OWNER_NAME.MAX}
        value={ownerName}
        onChange={onChange}
      />
    </>
  );
};

export default OwnerNameInput;
