import Button from "./";

const Template = (args) => <Button {...args} />;

export default {
  title: "Button",
  component: Button,
};

export const Primary = Template.bind({});
Primary.args = {
  children: "다음",
  color: "#04C09E",
};

export const BeforeButton = Template.bind({});
BeforeButton.args = {
  children: (
    <div>
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
          stroke="#525252"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  ),
  color: "#525252",
};
