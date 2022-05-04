import InputContainer from "./input.component";

export default {
  title: "Input",
  component: InputContainer,
};

const Template = (args) => <InputContainer {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  required: true,
  inputInfo: [
    { type: "number" },
    { type: "number" },
    { type: "password" },
    { type: "password" },
  ],
  connector: "-",
  inputClass: "default-input",
};

export const ExpireDateInput = Template.bind({});

ExpireDateInput.args = {
  required: true,
  inputInfo: [
    { type: "number", placeholder: "MM" },
    { type: "number", placeholder: "YY" },
  ],
  connector: "/",
  inputClass: "expire-date-input",
};

export const CardUserInput = Template.bind({});

CardUserInput.args = {
  required: false,
  inputInfo: [
    { type: "text", placeholder: "카드에 표시된 이름과 동일하게 입력하세요." },
  ],
  inputClass: "default-input",
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  required: true,
  inputInfo: [{ type: "password" }],
  inputClass: "security-code-input",
};

export const CardPasswordInput = Template.bind({});

CardPasswordInput.args = {
  required: true,
  inputInfo: [{ type: "password" }],
  inputClass: "card-password-input",
};
