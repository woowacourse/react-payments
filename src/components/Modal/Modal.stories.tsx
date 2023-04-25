import GlobalStyle from "../../styles/GlobalStyle";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Modal modalOpen={true} children={<div></div>}></Modal>
  </>
);
