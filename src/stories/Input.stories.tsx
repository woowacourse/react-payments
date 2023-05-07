import { StoryObj } from "@storybook/react";
import type { Meta } from "@storybook/react";
import { Input } from "../components/common/Input";
import { ERROR_MESSAGE } from "../constant/cardInput";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    $textPosition: {
      control: "radio",
      options: ["left", "right", "center"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const CardNumberInput: Story = {
  args: {
    label: "numbers",
    $width: "70px",
    $textPosition: "center",
  },
};

export const ExpiryDateInput: Story = {
  args: {
    label: "expiryDate",
    $width: "137px",
    placeholder: "MM / YY",
    $textPosition: "center",
  },
};

export const OwnerInput: Story = {
  args: {
    label: "owner",
    $width: "318px",
    placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    $textPosition: "left",
  },
};

export const CVCInput: Story = {
  args: {
    label: "cvc",
    $width: "84px",
    $textPosition: "center",
  },
};

export const PasswordInput: Story = {
  args: {
    label: "password",
    $width: "43px",
    $textPosition: "center",
  },
};

export const CVCInputError: Story = {
  args: {
    ...CVCInput.args,
    error: {
      isError: true,
      errorMessage: ERROR_MESSAGE.CVC,
    },
  },
};
