import type { Meta, StoryObj } from "@storybook/react";
import CVCInput from "../components/CVCInput/CVCInput";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useState } from "react";
import ERROR from "../constants/errorMessage";
import { CARD_VALIDATION_INFO } from "../constants/CardValidationInfo";

const meta: Meta<typeof CVCInput> = {
  title: "Components/CVCInput",
  component: CVCInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = () => {
  const [CVC, setCVC] = useState("");

  return <CVCInput CVC={CVC} setCVC={setCVC} />;
};

export const Invalid_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText("123");

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, "ab");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER),
    ).resolves.toBeInTheDocument();
  },
};

export const Invalid_NumberLength: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const CVCInput = canvas.getByPlaceholderText("123");

    await userEvent.clear(CVCInput);
    await userEvent.type(CVCInput, "12");

    await expect(
      canvas.findByText(
        `${CARD_VALIDATION_INFO.CVC_MAX_LENGTH}${ERROR.REQUIRE}`,
      ),
    ).resolves.toBeInTheDocument();
  },
};
