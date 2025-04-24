import type { Meta, StoryObj } from "@storybook/react";
import useControlledCVC from "../hooks/useControlledCVC";
import { expect, userEvent } from "@storybook/test";
import CVCInput from "./CVCInput";

const meta = {
  title: "Card/CVCInput",
  component: CVCInput,
  args: { CVCState: { isError: false, value: "" }, handleCVCChange: () => {} },
} satisfies Meta<typeof CVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    CVCState: { isError: true, value: "0" },
  },
};

export const WithValidationTest: Story = {
  render: () => {
    const { CVCState, handleCVCChange } = useControlledCVC();

    return <CVCInput CVCState={CVCState} handleCVCChange={handleCVCChange} />;
  },
  play: async ({ canvasElement }) => {
    const inputElement = canvasElement.querySelector(
      'input[role="cvc-input"]'
    ) as HTMLInputElement;

    await userEvent.type(inputElement, "12");
    expect(inputElement.value).toBe("12");

    const errorMessageEl = canvasElement.querySelector(
      "#error-message"
    ) as HTMLParagraphElement;
    expect(errorMessageEl.textContent).toBe("3자리의 숫자만 입력 가능합니다.");
  },
};
