import GlobalStyle from "../../styles/GlobalStyle";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Modal children={<div></div>} modalOpen={true}></Modal>
  </>
);
