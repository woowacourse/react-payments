import New from ".";
import { within, userEvent } from "@storybook/testing-library";

const Template = (args) => <New {...args} />;

export default {
  title: "pages/New",
  page: New,
};

export const Primary = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("card-number-0"), "1234", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("card-number-1"), "1234", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("card-number-2"), "1234", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("card-number-3"), "1234", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("due-month"), "12", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("due-year"), "23", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("owner"), "KOY", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("secure-code"), "123", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("first-password"), "1", {
    delay: 100,
  });
  await userEvent.type(canvas.getByTestId("second-password"), "2", {
    delay: 100,
  });
};
