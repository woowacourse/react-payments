import Modal from "./modal.component";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});
