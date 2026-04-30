import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within, expect } from "storybook/test";

import App from "./App";

const meta = {
  title: "App",
  component: App,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const VisaBrandDetection: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput = canvasElement.querySelector<HTMLInputElement>("#first-digits")!;

    await userEvent.type(firstDigitsInput, "4111");

    const brandLogo = canvas.getByAltText("visa-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
  },
};

export const MasterBrandDetection: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput = canvasElement.querySelector<HTMLInputElement>("#first-digits")!;

    await userEvent.type(firstDigitsInput, "5111");

    const brandLogo = canvas.getByAltText("master-network-brand-logo");
    await expect(brandLogo).toBeInTheDocument();
  },
};
