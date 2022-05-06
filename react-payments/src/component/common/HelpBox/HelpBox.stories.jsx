import HelpBox from "./HelpBox.component";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "HelpBox",
  component: HelpBox,
};

export const DefaultHelpBox = (args) => <HelpBox {...args} />;

export const HoverHelpBox = DefaultHelpBox.bind({});

HoverHelpBox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(canvas.getByRole("button", { hidden: true }));
};
