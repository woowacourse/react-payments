import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ExpireDate from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const expireDate = {
  component: ExpireDate,
  title: "ExpireDate Input",
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
} satisfies Meta<typeof ExpireDate>;

export default expireDate;

type Story = StoryObj<typeof expireDate>;

export const Default = {
  args: {},
} satisfies Story;

export const Success: Story = {
  render: () => {
    return <ExpireDate />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const month = await canvas.findByPlaceholderText("MM");
    const years = await canvas.findByPlaceholderText("YY");

    userEvent.clear(month);
    userEvent.clear(years);

    await userEvent.type(month, "02", { delay: 200 });
    await userEvent.type(years, "27", { delay: 200 });
  },
};

export const Fail: Story = {
  render: () => {
    return <ExpireDate />;
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const month = await canvas.findByPlaceholderText("MM");
    const years = await canvas.findByPlaceholderText("YY");

    userEvent.clear(month);
    userEvent.clear(years);

    await userEvent.type(month, "13", { delay: 200 });
    await userEvent.type(years, "27", { delay: 200 });

    expect(
      canvas.getByText("유효한 만료일이 아닙니다. ex) 50년 2월 02/50"),
    ).toBeInTheDocument();
  },
};
