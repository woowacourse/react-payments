import type { Meta, StoryObj } from "@storybook/react";
import useControlledCVC from "../hooks/useControlledCVC";
import { expect, userEvent } from "@storybook/test";
import CVCInputs from "./CVCInputs";

const meta = {
  title: "Component/CVCInput",
  component: CVCInputs,
  args: {
    CVCState: { errorMessage: "", value: "" },
    handleCVCChange: () => {},
  },
} satisfies Meta<typeof CVCInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    CVCState: {
      value: "0",
      errorMessage: "CVC는 3자리의 숫자만 입력 가능합니다.",
    },
  },
};

export const WithValidationTest: Story = {
  render: () => {
    const { CVCState, handleCVCChange } = useControlledCVC();

    return <CVCInputs CVCState={CVCState} handleCVCChange={handleCVCChange} />;
  },
  play: async ({ canvasElement }) => {
    const inputElement = canvasElement.querySelector(
      "#cvc-input"
    ) as HTMLInputElement;

    await userEvent.type(inputElement, "aaa");
    expect(inputElement.value).toBe("");

    const errorMessageEl = canvasElement.querySelector(
      "#error-message"
    ) as HTMLParagraphElement;

    expect(errorMessageEl.textContent).toBe("숫자만 입력 가능합니다.");
    await userEvent.type(inputElement, "12");
    expect(inputElement.value).toBe("12");
    expect(errorMessageEl.textContent).toBe(
      "CVC는 3자리의 숫자만 입력 가능합니다."
    );
  },
};
