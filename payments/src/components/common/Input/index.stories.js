import Input from ".";

export default {
  title: "Input",
  component: Input,
};

export const numberInput = () => <Input type="number" />;
export const passwordInput = () => <Input type="password" />;
export const nameInput = () => <Input type="" maxlength="30" />;
