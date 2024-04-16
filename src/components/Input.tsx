import { css } from '@emotion/react';

interface InputType {
  placeholder: string;
  setState: (s: string) => void;
}

function Input({ placeholder, setState }: InputType) {
  return (
    <>
      <input placeholder={placeholder} onChange={(e) => setState(e.target.value)}></input>
    </>
  );
}

export default Input;
