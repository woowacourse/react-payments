// import CardAddPage from "./CardAddPage.component";
// import { userEvent, within } from "@storybook/testing-library";

// export default {
//   title: "CardAddPage",
//   component: CardAddPage,
// };

// const Template = (args) => <CardAddPage {...args} />;

// export const DefaultCardAddPage = Template.bind({});

// DefaultCardAddPage.args = {};

// export const CompleteCardAddPage = Template.bind({});

// CompleteCardAddPage.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   await userEvent.type(canvas.getByTestId("card-number-0"), "1234");
//   await userEvent.type(canvas.getByTestId("card-number-1"), "2345");
//   await userEvent.type(canvas.getByTestId("card-number-2"), "3456");
//   await userEvent.type(canvas.getByTestId("card-number-3"), "4567");

//   await userEvent.type(canvas.getByTestId("expire-date-0"), "12");
//   await userEvent.type(canvas.getByTestId("expire-date-1"), "22");

//   await userEvent.type(canvas.getByTestId("card-user-0"), "스밍");

//   await userEvent.click(canvas.getByTestId("security-code-0"));
//   await userEvent.click(canvas.getByTestId("1"));
//   await userEvent.click(canvas.getByTestId("2"));
//   await userEvent.click(canvas.getByTestId("3"));
//   await userEvent.click(canvas.getByTestId("X"));

//   await userEvent.click(canvas.getAllByTestId("card-password-0")[0]);
//   await userEvent.click(canvas.getByTestId("1"));
//   await userEvent.click(canvas.getByTestId("2"));
//   await userEvent.click(canvas.getByTestId("X"));

//   await userEvent.click(canvas.getByTestId("card"));
//   const colorBoxes = document.querySelector(".color-box");
//   await userEvent.click(colorBoxes);
// };
