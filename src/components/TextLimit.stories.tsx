import { Meta, StoryObj } from "@storybook/react";
import TextLimitComponent from "./TextLimit";
import { css } from "styled-components";

const meta = {
  component: TextLimitComponent,
  title: "Components/TextLimit",
} satisfies Meta<typeof TextLimitComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const nicknameLimitStyle = css`
  font-size: 12px;
  text-align: right;
  margin: 4px 0 142px;
`;

export const TextLimit: Story = {
  args: {
    length: 20,
    textLimitStyle: nicknameLimitStyle,
  },
};
