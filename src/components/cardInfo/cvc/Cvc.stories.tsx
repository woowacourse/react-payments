import type { Meta, StoryObj } from "@storybook/react-vite";
import Cvc from "./Cvc";
import { CvcProvider } from "../../../context/cvc/CvcProvider";

const meta: Meta<typeof Cvc> = {
  title: "Components/Cvc",
  component: Cvc,
};

export default meta;

type Story = StoryObj<typeof Cvc>;

export const Default: Story = {
  render: () => {
    return (
      <CvcProvider>
        <Cvc />
      </CvcProvider>
    );
  },
};
