import { StoryObj, Meta } from "@storybook/react";
import Input from "../components/common/Input";
import { CARDNUMBERS_REGEX, EXPRIYDATE_REGEX } from "../constants";

const meta = {
  title: "Input",
  component: Input,
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInput: Story = {
  args: {
    label: "cardNumber",
    $width: "318px",
    placeholder: "",
    $textPosition: "center",
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replaceAll(" - ", "");

      if (value.length > 16) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      const numbers = value.slice(0, 8) + "●".repeat(value.slice(8).length);
      e.target.value = (numbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" - ");
    },
  },
};

export const ExpiryDateInput: Story = {
  args: {
    label: "expiryDate",
    $width: "137px",
    placeholder: "MM / YY",
    $textPosition: "center",
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replaceAll(" / ", "");

      if (value.length > 4) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      e.target.value = (value.match(new RegExp(EXPRIYDATE_REGEX)) ?? []).join(" / ");
    },
  },
};

export const CVCInput: Story = {
  args: {
    label: "cvc",
    $width: "84px",
    placeholder: "",
    $textPosition: "center",
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 3 || !/\d$/.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      e.target.value = e.target.value.replaceAll(/\d/g, "●");
    },
  },
};

export const PasswordInput: Story = {
  args: {
    label: "password",
    $width: "43px",
    placeholder: "",
    $textPosition: "center",
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 1 || !/\d$/.test(e.target.value)) {
        e.target.value = e.target.value.slice(0, -1);
        return;
      }

      e.target.value = e.target.value.replaceAll(/\d/g, "●");
    },
  },
};
