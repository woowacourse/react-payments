import React from "react";

interface Props {
  placeholder: string;
}

export default function Input({ placeholder }: Props) {
  return (
    <>
      <input type="text" placeholder={placeholder}></input>
    </>
  );
}
