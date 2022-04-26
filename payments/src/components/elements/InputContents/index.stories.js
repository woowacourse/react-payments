import { InputContents } from ".";

export default {
  title: "Input",
  component: InputContents,
};

export const numberInput = () => <InputContents type="number" />;
export const passwordInput = () => <InputContents type="password" />;
export const nameInput = () => <InputContents type="" maxlength="30" />;
