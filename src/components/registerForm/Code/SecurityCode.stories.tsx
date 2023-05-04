import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SecurityCode from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const securityCode = {
  component: SecurityCode,
  title: "SecurityCode",
  decorators: [
    (Story) => {
      return (
        <CardInfoProvider>
          <div style={{ width: "375px", margin: "0 auto" }}>
            <Story />
          </div>
        </CardInfoProvider>
      );
    },
  ],
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

type Story = StoryObj<typeof securityCode>;

export const Default = {
  args: {},
} satisfies Story;

export const Success: Story = {
  render: () => {
    return <SecurityCode />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const securityInput = canvas.queryByPlaceholderText(
      "•••",
    ) as HTMLInputElement;
    const toolTipImage = canvas.queryByAltText(
      "cvc-question-information",
    ) as HTMLImageElement;

    userEvent.clear(securityInput);

    await userEvent.type(securityInput, "123", { delay: 200 });
    expect(securityInput).toHaveValue("123");

    userEvent.hover(toolTipImage);

    expect(canvas.queryByAltText("cvc-information")).toBeInTheDocument();
  },
};

export const Fail: Story = {
  render: () => {
    return <SecurityCode />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const securityInput = canvas.queryByPlaceholderText(
      "•••",
    ) as HTMLInputElement;
    userEvent.clear(securityInput);

    await userEvent.type(securityInput, "13", { delay: 200 });
    expect(canvas.getByText("3글자를 입력해주세요")).toBeInTheDocument();
  },
};
