import { action } from "@storybook/addon-actions";
import Modal from "./modal.component";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});

DefaultModal.args = {
  toggleModal: action("toggled"),
  onClickCardType: action("clickedCardType"),
};
