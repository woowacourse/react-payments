import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardNumber from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

const cardNumber = {
  component: CardNumber,
  title: "Card Number Input",
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
  argTypes: {
    CardInfoProvider: {
      type: "function",
    },
    CardNumber: {
      option: "string",
    },
  },
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

type Story = StoryObj<typeof cardNumber>;

export const Example = {
  args: {},
} satisfies Story;

export const Success: Story = {
  render: () => {
    return <CardNumber />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.queryByText("카드 번호") as HTMLLabelElement;
    const labelFor = label.htmlFor;

    const inputElements = canvas.queryAllByText("", {
      selector: "input",
    }) as HTMLInputElement[];
    const labelInputs = inputElements.filter((ele) => ele.name === labelFor);

    await userEvent.type(labelInputs[0], "1234", { delay: 200 });
    await userEvent.type(labelInputs[1], "1234", { delay: 200 });
    await userEvent.type(labelInputs[2], "1234", { delay: 200 });
    await userEvent.type(labelInputs[3], "1234", { delay: 200 });

    expect(labelInputs[0]).toHaveValue("1234");
    expect(labelInputs[1]).toHaveValue("1234");
    expect(labelInputs[2]).toHaveValue("1234");
    expect(labelInputs[3]).toHaveValue("1234");
  },
};

export const Fail: Story = {
  render: () => {
    return <CardNumber />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.queryByText("카드 번호") as HTMLLabelElement;
    const labelFor = label.htmlFor;

    const inputElements = canvas.queryAllByText("", {
      selector: "input",
    }) as HTMLInputElement[];
    const labelInputs = inputElements.filter((ele) => ele.name === labelFor);

    await userEvent.type(labelInputs[0], "1234", { delay: 200 });
    await userEvent.type(labelInputs[1], "1234", { delay: 200 });
    await userEvent.type(labelInputs[2], "1234", { delay: 200 });
    await userEvent.type(labelInputs[3], "123", { delay: 200 });

    expect(canvas.getByText("4글자를 입력해주세요")).toBeInTheDocument();
  },
};
