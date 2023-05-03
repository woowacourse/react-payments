import { Meta, StoryFn } from "@storybook/react";
import { BottomSheet } from "../components";
import type { BottomSheetType } from "../components/common/BottomSheet";

export default {
  title: "BottomSheet",
  component: BottomSheet,
} as Meta<BottomSheetType>;

const Template: StoryFn<BottomSheetType> = (props) => (
  <BottomSheet {...props} />
);

export const EmptyBottomSheet = Template.bind({});
EmptyBottomSheet.args = {
  children: null,
};
