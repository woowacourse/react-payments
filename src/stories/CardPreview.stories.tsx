import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/CardPreview/CardPreview";
import { useState } from "react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const TemplateVisa = () => {
  const [cardNumbers] = useState<string[]>(["4234", "5678", "3333", "4444"]);
  const [month] = useState("12");
  const [year] = useState("30");

  return <CardPreview cardNumbers={cardNumbers} month={month} year={year} />;
};

const TemplateMaster = () => {
  const [cardNumbers] = useState<string[]>(["5134", "5678", "3333", "4444"]);
  const [month] = useState("12");
  const [year] = useState("30");

  return <CardPreview cardNumbers={cardNumbers} month={month} year={year} />;
};

export const PreviewUpdatesOnInputVisa: Story = {
  render: TemplateVisa,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = await canvas.findAllByTestId(/^card-number-/);

    expect(inputs[0]).toHaveTextContent("4234");
    expect(inputs[1]).toHaveTextContent("5678");
    expect(inputs[2]).toHaveTextContent("••••");
    expect(inputs[3]).toHaveTextContent("••••");

    expect(canvas.getByText("12/30")).toBeInTheDocument();
  },
};

export const PreviewUpdatesOnInputMaster: Story = {
  render: TemplateMaster,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = await canvas.findAllByTestId(/^card-number-/);

    expect(inputs[0]).toHaveTextContent("5134");
    expect(inputs[1]).toHaveTextContent("5678");
    expect(inputs[2]).toHaveTextContent("••••");
    expect(inputs[3]).toHaveTextContent("••••");

    expect(canvas.getByText("12/30")).toBeInTheDocument();
  },
};
