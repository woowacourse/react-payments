import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./cardPassword.css";

interface Props {}

export default function CardPassword(props: Props) {
  return (
    <div className="input-box-card-password">
      <Input
        className="input-password"
        type="password"
        onChange={() => {}}
        placeholder="X"
        inputMode="numeric"
      ></Input>
      <Input
        className="input-password"
        type="password"
        onChange={() => {}}
        placeholder="X"
        inputMode="numeric"
      ></Input>
      <input
        className="input-password"
        disabled
        type="password"
        defaultValue={0}
      />
      <input
        className="input-password"
        disabled
        type="password"
        defaultValue={0}
      />
    </div>
  );
}
