import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import OwnerNameInput from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const ownerNameInput = {
  component: OwnerNameInput,
  title: "OwnerNameInput",
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
} satisfies Meta<typeof OwnerNameInput>;

export default ownerNameInput;

type Story = StoryObj<typeof ownerNameInput>;

export const Default = {
  args: {},
} satisfies Story;

export const Success: Story = {
  render: () => {
    return <OwnerNameInput />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const ownerNameInput = canvas.queryByPlaceholderText(
      "영어와 띄어쓰기만 입력 가능합니다.",
    ) as HTMLInputElement;

    userEvent.clear(ownerNameInput);

    await userEvent.type(ownerNameInput, "clean", { delay: 200 });
    expect(ownerNameInput).toHaveValue("CLEAN");
  },
};

export const Fail: Story = {
  render: () => {
    return <OwnerNameInput />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const ownerNameInput = canvas.queryByPlaceholderText(
      "영어와 띄어쓰기만 입력 가능합니다.",
    ) as HTMLInputElement;

    userEvent.clear(ownerNameInput);

    await userEvent.type(ownerNameInput, "CL", { delay: 200 });
    expect(
      canvas.queryByText("카드 소유자 이름은 3글자 이상 30글자 이하입니다."),
    ).toBeInTheDocument();
  },
};
