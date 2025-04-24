import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";
import type { FlowStep } from "@/AddCard/types/hook";
import { STEP_LABELS } from "@/AddCard/constants";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "380px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    currentStep: "CARD_NUMBER" as FlowStep,
    allValid: true,
    stepLabels: STEP_LABELS,
  },
};

export const CardBrand: Story = {
  args: {
    currentStep: "CARD_BRAND" as FlowStep,
    allValid: true,
    stepLabels: STEP_LABELS,
  },
};

export const ExpireDate: Story = {
  args: {
    currentStep: "EXPIRE_DATE" as FlowStep,
    allValid: true,
    stepLabels: STEP_LABELS,
  },
};

export const CVC: Story = {
  args: {
    currentStep: "CVC" as FlowStep,
    allValid: true,
    stepLabels: STEP_LABELS,
  },
};

export const Password: Story = {
  args: {
    currentStep: "PASSWORD" as FlowStep,
    allValid: true,
    stepLabels: STEP_LABELS,
  },
};

export const WithError: Story = {
  args: {
    currentStep: "COMPLETE" as FlowStep,
    allValid: false,
    stepLabels: STEP_LABELS,
  },
};
