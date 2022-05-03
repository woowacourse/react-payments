import CardAddPage from "./CardAddPage.component";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "CardAddPage",
  component: CardAddPage,
};

const Template = (args) => <CardAddPage {...args} />;

export const DefaultCardAddPage = Template.bind({});

DefaultCardAddPage.args = {};

export const CompleteCardAddPage = Template.bind({});

CompleteCardAddPage.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.type(canvas.getByTestId("card-number-0"), "1234");
  userEvent.type(canvas.getByTestId("card-number-1"), "2345");
  userEvent.type(canvas.getByTestId("card-number-2"), "3456");
  userEvent.type(canvas.getByTestId("card-number-3"), "4567");

  userEvent.type(canvas.getByTestId("expire-date-0"), "12");
  userEvent.type(canvas.getByTestId("expire-date-1"), "22");

  userEvent.type(canvas.getByTestId("card-user-0"), "스밍");

  userEvent.click(canvas.getByTestId("security-code-0"));
  userEvent.click(canvas.getByTestId("1"));
  userEvent.click(canvas.getByTestId("2"));
  userEvent.click(canvas.getByTestId("3"));
  userEvent.click(canvas.getByTestId("X"));

  userEvent.click(canvas.getAllByTestId("card-password-0")[0]);
  userEvent.click(canvas.getByTestId("1"));
  userEvent.click(canvas.getByTestId("2"));
  userEvent.click(canvas.getByTestId("X"));

  userEvent.click(canvas.getByTestId("card"));
  const colorBoxes = document.querySelector(".color-box");
  userEvent.click(colorBoxes);
};
