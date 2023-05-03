import { StoryFn } from "@storybook/react";
import { Loading } from "../page/Loading";

export default {
  title: "LoadingPage",
  component: Loading,
};

export const LoadingPage: StoryFn<typeof Loading> = (): React.ReactElement => (
  <Loading />
);
