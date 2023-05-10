import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardPassword from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const cardPassword = {
  component: CardPassword,
  title: "CardPassword",
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
} satisfies Meta<typeof CardPassword>;

export default cardPassword;

type Story = StoryObj<typeof cardPassword>;

export const Default = {
  args: {},
} satisfies Story;

export const Success: Story = {
  render: () => {
    return <CardPassword />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.queryByText("카드 비밀번호") as HTMLLabelElement;
    const labelFor = label.htmlFor;

    const inputs = canvas.queryAllByText("", {
      exact: false,
      selector: "input",
    }) as HTMLInputElement[];
    const labelForInput = inputs.filter((ele) => ele.name === labelFor);
    labelForInput.forEach((ele) => userEvent.clear(ele));

    await userEvent.type(labelForInput[0], "1", { delay: 200 });
    await userEvent.type(labelForInput[1], "2", { delay: 200 });

    expect(labelForInput[0]).toHaveValue("1");
    expect(labelForInput[1]).toHaveValue("2");
  },
};

export const Fail: Story = {
  render: () => {
    return <CardPassword />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.queryByText("카드 비밀번호") as HTMLLabelElement;
    const labelFor = label.htmlFor;

    const inputs = canvas.queryAllByText("", {
      exact: false,
      selector: "input",
    }) as HTMLInputElement[];
    const labelForInput = inputs.filter((ele) => ele.name === labelFor);

    labelForInput.forEach((ele) => userEvent.clear(ele));

    await userEvent.type(labelForInput[0], "1", { delay: 200 });

    expect(canvas.getByText("2글자를 입력해주세요")).toBeInTheDocument();
  },
};
