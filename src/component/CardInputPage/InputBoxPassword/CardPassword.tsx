import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

interface Props {}

export default function CardPassword(props: Props) {
  return (
    <>
      <Input
        type="password"
        onChange={() => {}}
        placeholder="X"
        inputMode="numeric"
      ></Input>
      <Input
        type="password"
        onChange={() => {}}
        placeholder="X"
        inputMode="numeric"
      ></Input>

      <input disabled type="password" defaultValue={0} />
      <input disabled type="password" defaultValue={0} />
    </>
  );
}
