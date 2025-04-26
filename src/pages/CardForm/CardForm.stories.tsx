import type { Meta, StoryObj } from "@storybook/react";
import CardForm from "./CardForm";
import { withCustomCardProvider } from "../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../.storybook/utils/withCustomCardValidationProvider";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "CardForm",
  component: CardForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/",
          },
        ]}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
};
