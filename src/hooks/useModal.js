import { useState } from "react";

export const useModal = () => {
  const [modalVisibleState, setModalVisible] = useState(false);
  const [modalName, setModalName] = useState("");

  const setModalState = (state, name = "") => {
    setModalVisible(state);

    name && setModalName(name);
  };

  return [modalVisibleState, setModalState, modalName];
};
