import { action } from "@storybook/addon-actions";
import Modal from "./modal.component";
import CardTypeSelector from "../../CardTypeSelector/CardTypeSelector";
export default {
  title: "Modal",
  component: Modal,
};

export const CardTypeSelectorModal = (args) => (
  <Modal {...args}>
    <CardTypeSelector currentCardType="pocoCard" />
  </Modal>
);

CardTypeSelectorModal.args = {
  toggleModal: action("toggled"),
};
