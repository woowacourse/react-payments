import Modal from ".";
import Palette from "../Palette";

const Template = (args) => <Modal {...args} />;

export default {
  title: "component/common/Modal",
  component: Modal,
};

export const PaletteModal = Template.bind({});
PaletteModal.args = {
  children: <Palette />,
};
