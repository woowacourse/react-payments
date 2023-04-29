import { StoryFn } from "@storybook/react";
import Input from "../components/common/Input";
import { CARDNUMBERS_REGEX, EXPRIYDATE_REGEX } from "../constants";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  ref?: React.RefObject<HTMLInputElement>;
  error?: { isValid: boolean; errorMessage: string };
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  $width: string;
  $textPosition: string;
}

export default {
  title: "Input",
  component: Input,
};

const Template: StoryFn<typeof Input> = (args: InputProps): React.ReactElement => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  label: "cardNumber",
  $width: "318px",
  placeholder: "",
  $textPosition: "center",
  handleInput: (e) => {
    const value = e.target.value.replaceAll(" - ", "");

    if (value.length > 16) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    // 카드번호 저장 로직

    const numbers = value.slice(0, 8) + "●".repeat(value.slice(8).length);
    e.target.value = (numbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" - ");
  },
};

export const ExpiryDateInput = Template.bind({});

ExpiryDateInput.args = {
  label: "expiryDate",
  $width: "137px",
  placeholder: "MM / YY",
  $textPosition: "center",
  handleInput: (e) => {
    const value = e.target.value.replaceAll(" / ", "");

    if (value.length > 4) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = (value.match(new RegExp(EXPRIYDATE_REGEX)) ?? []).join(" / ");
  },
};

export const OwnerInput = Template.bind({});

OwnerInput.args = {
  label: "owner",
  $width: "318px",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  $textPosition: "left",
  handleInput: (e) => {
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = e.target.value.toUpperCase();
  },
};

export const CVCInput = Template.bind({});

CVCInput.args = {
  label: "cvc",
  $width: "84px",
  placeholder: "",
  $textPosition: "center",
  handleInput: (e) => {
    if (e.target.value.length > 3 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = e.target.value.replaceAll(/\d/g, "●");
  },
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  label: "password",
  $width: "43px",
  placeholder: "",
  $textPosition: "center",
  handleInput: (e) => {
    if (e.target.value.length > 1 || !/\d$/.test(e.target.value)) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    e.target.value = e.target.value.replaceAll(/\d/g, "●");
  },
};
